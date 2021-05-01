'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { kick } from './Kick';

// Resources
import { GuildMemberRoles } from './Roles';

export class GuildMembers extends Resource
{
	public readonly kick = kick;
	public readonly roles: GuildMemberRoles;
	constructor({client}: {client: Client})
	{
		super({client});
		this.roles = new GuildMemberRoles({client});
	};
};