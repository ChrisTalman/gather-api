'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	memberId: string;
	guildId: string;
};

export async function kick(this: Resource, {memberId, guildId, options}: Parameters)
{
	await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'DELETE',
				path: `/guilds/${guildId}/members/${memberId}`,
				jsonResponseError: true
			},
			options
		}
	);
};