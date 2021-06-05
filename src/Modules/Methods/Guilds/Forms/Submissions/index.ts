'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { get } from './Get';
import { list } from './List';

export class GuildFormSubmissions extends Resource
{
	public list = list;
	public get = get;
	constructor({client}: {client: Client})
	{
		super({client});
	};
};