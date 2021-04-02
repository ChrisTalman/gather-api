'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestOptionsWrapper } from 'src/Modules';
import { RequestBody } from 'src/Types/Api/Request';
interface Parameters extends RequestOptionsWrapper
{
	data: object;
	guildId: string;
};
export interface PostRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data?: object;
};

export async function create(this: Resource, {data, guildId, options}: Parameters)
{
	const body: PostRequestBody =
	{
		pluck:
		[
			'id',
			'name'
		],
		data
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'POST',
				path: `/guilds/${guildId}/roles`,
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