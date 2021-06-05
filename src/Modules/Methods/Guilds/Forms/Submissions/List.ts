'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, GetRequestBody } from 'src/Types/Methods/Guilds/Forms/Submissions/List';

export async function list(this: Resource, {guildId, filters, pagination, pluck, options}: MethodParameters)
{
	const body: GetRequestBody =
	{
		pluck,
		pagination
	};
	if (filters)
	{
		body.data =
		{
			filters
		};
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/guilds/${guildId}/forms/submissions`,
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