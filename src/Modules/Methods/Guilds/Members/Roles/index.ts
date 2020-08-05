'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { GuildMemberRolesRole } from './Role';

// Methods
import { grant } from './Grant';

export class GuildMemberRoles extends Resource
{
	public grant = grant;
	public role: GuildMemberRolesRole;
	constructor({client}: {client: Client})
	{
		super({client});
		this.role = new GuildMemberRolesRole({client});
	};
};