'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { GuildMembers } from './Members';
import { GuildRoles } from './Roles';

export class Guilds extends Resource
{
	public readonly members: GuildMembers;
	public readonly roles: GuildRoles;
	constructor({client}: {client: Client})
	{
		super({client});
		this.members = new GuildMembers({client});
		this.roles = new GuildRoles({client});
	};
};