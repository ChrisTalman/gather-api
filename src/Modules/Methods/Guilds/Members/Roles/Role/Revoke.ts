'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Types
import { RequestOptionsWrapper } from 'src/Modules';
interface Parameters extends RequestOptionsWrapper
{
	id: string;
	guildId: string;
	memberId: string;
	roleId: string;
};

export async function revoke(this: Resource, {guildId, memberId, roleId, options}: Parameters)
{
	await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'DELETE',
				path: `/guilds/${guildId}/members/${memberId}/roles/${roleId}`,
				jsonResponseError: true
			},
			options
		}
	);
};