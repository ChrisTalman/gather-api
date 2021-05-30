'use strict';

// Internal Modules
import { Client } from 'src/Modules/Client';
import { Resource } from 'src/Modules/Resource';

// Methods
import { get } from './Get';

// Resources
import { FormElements } from './Elements';
import { FormSubmissions } from './Submissions';

export class Forms extends Resource
{
	public get = get;
	public readonly elements: FormElements;
	public readonly submissions: FormSubmissions;
	constructor({client}: {client: Client})
	{
		super({client});
		this.elements = new FormElements({client});
		this.submissions = new FormSubmissions({client});
	};
};