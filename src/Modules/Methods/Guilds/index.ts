'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { GuildMembers } from './Members';

export class Guilds extends Resource
{
	public readonly members: GuildMembers;
	constructor({client}: {client: Client})
	{
		super({client});
		this.members = new GuildMembers({client});
	};
};