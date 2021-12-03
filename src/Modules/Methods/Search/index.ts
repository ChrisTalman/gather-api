'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Methods
import { list } from './List';

export class Search extends Resource
{
	public list = list;
};