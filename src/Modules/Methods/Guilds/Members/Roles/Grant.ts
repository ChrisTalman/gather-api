'use strict';

// Internal Modules
import { resolveApiResponseJson } from 'src/Modules/ApiResponse';
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
interface ApiParameters
{
	data:
	{
		roleId: string;
	};
};

export async function grant(this: Resource, {guildId, memberId, roleId, options}: Parameters)
{
	const body: ApiParameters =
	{
		data:
		{
			roleId
		}
	};
	const result = await this._client.scheduleApiRequest <any>
	(
		{
			request:
			{
				method: 'POST',
				path: `/guilds/${guildId}/members/${memberId}/roles`,
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