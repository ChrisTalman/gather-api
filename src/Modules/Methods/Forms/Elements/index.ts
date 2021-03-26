'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { get } from './Get';

export class FormElements extends Resource
{
	public get = get;
	constructor({client}: {client: Client})
	{
		super({client});
	};
};