'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { ResponseBody } from 'src/Types/Api/Response';
import { Pluck } from 'src/Types/Api/Pluck';
import { RequestOptionsWrapper } from 'src/Types/Methods';
interface Parameters extends RequestOptionsWrapper
{
	timestamp: number;
	formId: string;
	pluck: Pluck;
};
export interface GetRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data?: GetRequestBodyData;
};
export interface GetRequestBodyData
{
	filters?: GetRequestBodyDataFilters;
};
export interface GetRequestBodyDataFilters
{
	/** Elements in effect at Unix milliseconds. */
	timestamp?: number;
};
export interface GetResponseBody extends Pick <ResponseBody, 'data'>
{
	data: any;
};

export async function get(this: Resource, {timestamp, formId, pluck, options}: Parameters)
{
	const body: GetRequestBody =
	{
		pluck,
		data:
		{
			filters:
			{
				timestamp
			}
		}
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'GET',
				path: `/forms/${formId}/elements`,
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