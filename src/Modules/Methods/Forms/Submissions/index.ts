'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { create } from './Create';
import { update } from './Update';
import { get } from './Get';

export class FormSubmissions extends Resource
{
	public create = create;
	public update = update;
	public get = get;
	constructor({client}: {client: Client})
	{
		super({client});
	};
};