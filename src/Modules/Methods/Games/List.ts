'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import * as GamesMethod from 'src/Types/Methods/Games/List';

export async function list(this: Resource, {data, pagination, pluck, options}: GamesMethod.MethodParameters)
{
	if (!options) options = {};
	if (!('accessToken' in options)) options.accessToken = false;
	const body: GamesMethod.GetRequestBody =
	{
		pluck
	};
	if (data) body.data = data;
	if (pagination) body.pagination = pagination;
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/games`,
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