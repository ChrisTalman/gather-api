'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { submit } from './Submit';

// Resources
import { FormElements } from './Elements';

export class Forms extends Resource
{
	public readonly elements: FormElements;
	public submit = submit;
	constructor({client}: {client: Client})
	{
		super({client});
		this.elements = new FormElements({client});
	};
};