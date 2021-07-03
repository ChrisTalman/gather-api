'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, PatchRequestBody } from 'src/Types/Methods/Guilds/Update';

export async function update(this: Resource, {guildId, data, pluck, options}: MethodParameters)
{
	const body: PatchRequestBody =
	{
		pluck,
		data
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'PATCH',
				path: `/guilds/${guildId}`,
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