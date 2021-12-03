'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Methods
import { list } from './List';
import { get } from './Get';

export class Games extends Resource
{
	public list = list;
	public get = get;
};