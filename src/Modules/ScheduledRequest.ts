'use strict';

// External Modules
import { Definition as RequestDefinition, Result as RequestResult } from '@chris-talman/request';
import { PromiseController } from '@chris-talman/isomorphic-utilities';

// Internal Modules
import { Client } from './Client';

// Types
import { RequestOptions } from 'src/Modules';

export class ScheduledRequest <GenericResultJson, GenericResult extends RequestResult<GenericResultJson> = RequestResult<GenericResultJson>>
{
	public readonly client: Client;
	private readonly request: RequestDefinition;
	public readonly options: RequestOptions;
	public readonly promiseController: PromiseController <RequestResult<GenericResultJson>>;
	private executing = false;
	private executed = false;
	constructor({request: rawRequest, options, client}: {request: RequestDefinition, options: RequestOptions, client: Client})
	{
		const request = Object.assign({}, rawRequest);
		if (typeof options.accessToken === 'string')
		{
			request.auth = `Bearer ${options.accessToken}`;
		};
		this.request = request;
		this.options = options;
		this.client = client;
		this.promiseController = new PromiseController();
		this.execute();
	};
	public async execute()
	{
		if (this.executing || this.executed) return;
		this.executing = true;
		const { request } = this;
		let result: GenericResult;
		try
		{
			result = await this.client.executeApiRequest({request});
		}
		catch (error)
		{
			this.reject(error);
			return;
		};
		this.promiseController.resolve(result);
		this.markExecuted();
	};
	private reject(error: any)
	{
		this.promiseController.reject(error);
		this.markExecuted();
	};
	private markExecuted()
	{
		this.executed = true;
		this.executing = false;
	};
};