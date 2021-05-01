'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	userId: string;
	guildId: string;
};
interface RequestBody
{
	data: RequestBodyData;
};
interface RequestBodyData
{
	userId: string;
};

export async function add(this: Resource, {userId, guildId, options}: Parameters)
{
	const body: RequestBody =
	{
		data:
		{
			userId
		}
	};
	await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'POST',
				path: `/guilds/${guildId}/members`,
				body,
				jsonResponseError: true
			},
			options
		}
	);
};