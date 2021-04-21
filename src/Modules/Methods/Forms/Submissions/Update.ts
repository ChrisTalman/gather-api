'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	id: string;
	formId: string;
	elements?: PostRequestBodyData['elements'];
	state?: PostRequestBodyData['state'];
};
export interface PostRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data: PostRequestBodyData;
};
export interface PostRequestBodyData
{
	state?: string;
	elements?: object;
};

export async function update(this: Resource, {id, formId, elements, state, options}: Parameters)
{
	const body: PostRequestBody =
	{
		pluck: [],
		data: {}
	};
	if (elements) body.data.elements = elements;
	if (state) body.data.state = state;
	await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'PATCH',
				path: `/forms/${formId}/submissions/${id}`,
				body,
				jsonResponseError: true
			},
			options
		}
	);
};