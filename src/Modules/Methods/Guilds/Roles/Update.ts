'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestOptionsWrapper } from 'src/Types/Methods';
interface Parameters extends RequestOptionsWrapper
{
	id: string;
	data: object;
	guildId: string;
};
interface ApiParameters
{
	data: object;
};

export async function update(this: Resource, {id, data, guildId, options}: Parameters)
{
	const body: ApiParameters =
	{
		data
	};
	await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'PATCH',
				path: `/guilds/${guildId}/roles/${id}`,
				body,
				jsonResponseError: true
			},
			options
		}
	);
};