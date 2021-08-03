'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, GetRequestBody } from 'src/Types/Methods/Guilds/Forms/List';

export async function list(this: Resource, {guildId, filters, sort, pluck, pagination, options}: MethodParameters)
{
	const body: GetRequestBody =
	{
		pluck,
		pagination
	};
	body.data = {};
	if (filters) body.data.filters = filters;
	if (sort) body.data.sort = sort;
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/guilds/${guildId}/forms/items`,
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