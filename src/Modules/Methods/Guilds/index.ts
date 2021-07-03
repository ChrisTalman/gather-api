'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { update } from './Update';

// Resources
import { GuildMembers } from './Members';
import { GuildRoles } from './Roles';
import { GuildForms } from './Forms';

export class Guilds extends Resource
{
	public readonly update = update;
	public readonly members: GuildMembers;
	public readonly roles: GuildRoles;
	public readonly forms: GuildForms;
	constructor({client}: {client: Client})
	{
		super({client});
		this.members = new GuildMembers({client});
		this.roles = new GuildRoles({client});
		this.forms = new GuildForms({client});
	};
};