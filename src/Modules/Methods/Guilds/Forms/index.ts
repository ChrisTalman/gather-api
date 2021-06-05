'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { GuildFormSubmissions } from './Submissions';

export class GuildForms extends Resource
{
	public submissions: GuildFormSubmissions;
	constructor({client}: {client: Client})
	{
		super({client});
		this.submissions = new GuildFormSubmissions({client});
	};
};