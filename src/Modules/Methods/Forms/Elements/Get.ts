'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { ResponseBody } from 'src/Types/Api/Response';
import { RequestOptionsWrapper } from 'src/Types/Methods';
interface Parameters extends RequestOptionsWrapper
{
	timestamp: number;
	formId: string;
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

export async function get(this: Resource, {timestamp, formId, options}: Parameters)
{
	const body: GetRequestBody =
	{
		pluck:
		[
			'id',
			'type',
			'position',
			'label',
			'description',
			'optional',
			'min',
			'max',
			'multiline',
			'pattern',
			'multiple',
			'platforms',
			{
				options:
				[
					'id',
					'label',
					'position'
				]
			},
			'mode'
		],
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