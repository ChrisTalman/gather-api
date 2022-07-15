'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { MethodParameters, PatchRequestBody } from 'src/Types/Methods/Forms/Submissions/Update';

export async function update(this: Resource, {id, formId, elements, state, locked, pluck, options}: MethodParameters)
{
	const body: PatchRequestBody =
	{
		pluck,
		data: {}
	};
	if (elements) body.data.elements = elements;
	if (state) body.data.state = state;
	if (locked !== undefined) body.data.locked = locked;
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