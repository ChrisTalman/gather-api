'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	elements: PostRequestBodyData['elements'];
	state: PostRequestBodyData['state'];
	formTimestamp: number;
	formId: string;
};
export interface PostRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data: PostRequestBodyData;
};
export interface PostRequestBodyData
{
	formTimestamp: number;
	state: string;
	elements: object;
};

export async function get(this: Resource, {elements, state, formTimestamp, formId, options}: Parameters)
{
	const body: PostRequestBody =
	{
		pluck:
		[
			'id'
		],
		data:
		{
			elements,
			state,
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