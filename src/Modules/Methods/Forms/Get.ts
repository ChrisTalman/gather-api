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
	formId: string;
	pluck: Pluck;
};
export interface GetRequestBody extends Pick <RequestBody, 'pluck'>
{
	pluck: Pluck;
};

export async function get(this: Resource, {formId, pluck, options}: Parameters)
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
				path: `/forms/${formId}`,
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