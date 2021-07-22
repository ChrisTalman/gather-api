'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, PostRequestBody } from 'src/Types/Methods/Forms/Submissions/Create';

export async function create(this: Resource, {elements, state, venue, formTimestamp, formId, pluck, options}: MethodParameters)
{
	const body: PostRequestBody =
	{
		pluck,
		data:
		{
			elements,
			state,
			venue,
			formTimestamp
		}
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'POST',
				path: `/forms/${formId}/submissions`,
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