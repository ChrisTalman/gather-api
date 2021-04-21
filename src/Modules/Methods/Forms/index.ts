'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Resources
import { FormElements } from './Elements';
import { FormSubmissions } from './Submissions';

export class Forms extends Resource
{
	public readonly elements: FormElements;
	public readonly submissions: FormSubmissions;
	constructor({client}: {client: Client})
	{
		super({client});
		this.elements = new FormElements({client});
	};
};