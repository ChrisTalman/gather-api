'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { GuildMemberRoles } from './Roles';

export class GuildMembers extends Resource
{
	public readonly roles: GuildMemberRoles;
	constructor({client}: {client: Client})
	{
		super({client});
		this.roles = new GuildMemberRoles({client});
	};
};