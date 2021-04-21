'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { create } from './Create';
import { update } from './Update';

export class FormSubmissions extends Resource
{
	public create = create;
	public update = update;
	constructor({client}: {client: Client})
	{
		super({client});
	};
};