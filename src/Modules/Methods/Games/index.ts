'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Methods
import { list } from './List';

export class Games extends Resource
{
	public list = list;
};