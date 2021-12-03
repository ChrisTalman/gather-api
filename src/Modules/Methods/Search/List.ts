'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import * as SearchMethod from 'src/Types/Methods/Search/List';

export async function list(this: Resource, {filters, pagination, pluck, options}: SearchMethod.MethodParameters)
{
	if (!options) options = {};
	if (!('accessToken' in options)) options.accessToken = false;
	const body: SearchMethod.GetRequestBody =
	{
		pluck
	};
	if (filters) body.filters = filters;
	if (pagination) body.pagination = pagination;
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/search`,
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