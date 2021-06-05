'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, GetRequestBody } from 'src/Types/Methods/Guilds/Forms/Submissions/Get';

export async function get(this: Resource, {submissionId, guildId, pluck, options}: MethodParameters)
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