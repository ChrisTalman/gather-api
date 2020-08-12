'use strict';

// External Modules
import { Domain, Definition as RequestDefinition, Result as RequestResult } from '@chris-talman/request';

// Internal Modules
import { throwRejectionApiError } from 'src/Modules/ApiError';
import { verifySignature, generateRequestBodySignature } from 'src/Modules/Signature';
import { ScheduledRequest } from './ScheduledRequest';
import { Guilds } from './Methods/Guilds';

// Types
import { DefinitionDebug } from '@chris-talman/request';
import { RequestOptions } from 'src/Modules';

export class Client
{
	public readonly accessToken: string;
	public readonly secret?: string;
	public readonly url: string = 'https://api.gather.sh';
	public readonly domain: Domain;
	/** Debug options to pass to the request module. */
	public readonly requestDebug?: DefinitionDebug;
	constructor({accessToken, secret, url, requestDebug}: {accessToken: Client['accessToken'], secret?: Client['secret'], url?: Client['url'], requestDebug?: Client['requestDebug']})
	{
		this.accessToken = accessToken;
		this.url = url ?? this.url;
		this.secret = secret;
		this.domain = new Domain
		(
			{
				path: url,
				auth: () => `Bearer ${accessToken}`,
				queryBody: 'body',
				debug: requestDebug
			}
		);
	};
	public async scheduleApiRequest <GenericResultJson> ({request, options = {}}: {request: RequestDefinition, options?: RequestOptions})
	{
		const scheduledRequest = new ScheduledRequest <GenericResultJson> ({request, options, client: this});
		const result = await scheduledRequest.promiseController.promise;
		return result;
	};
	public async executeApiRequest <GenericResultJson, GenericResult extends RequestResult <GenericResultJson>> ({request}: {request: RequestDefinition})
	{
		const result: GenericResult = await throwRejectionApiError(this.domain.request(request));
		return result;
	};
	public verifySignature({signature, requestBody}: {signature: string, requestBody: string | object})
	{
		if (!this.secret) throw new Error('Secret not set in client');
		const verified = verifySignature({signature, requestBody, secret: this.secret});
		return verified;
	};
	public generateRequestBodySignature({requestBody}: {requestBody: string | object})
	{
		if (!this.secret) throw new Error('Secret not set in client');
		const signature = generateRequestBodySignature({requestBody, secret: this.secret});
		return signature;
	};
	public guilds = new Guilds({client: this});
};