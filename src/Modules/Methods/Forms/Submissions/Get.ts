'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { Pluck } from 'src/Types/Api/Pluck';
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	submissionId: string;
	guildId: string;
	pluck: Pluck;
};
export interface GetRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	pluck: Pluck;
};

export async function get(this: Resource, {submissionId, guildId, pluck, options}: Parameters)
{
	const body: GetRequestBody =
	{
		pluck
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/guilds/${guildId}/forms/submissions/${submissionId}`,
				body,
				jsonResponseSuccess: true,
				jsonResponseError: true
			},
			options
		}
	);
	const json = resolveApiResponseJson(result);
	return json;
};