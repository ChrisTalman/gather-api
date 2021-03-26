'use strict';

// Types
import { Pluck } from './Pluck';
import { Pagination } from './Pagination';

export interface RequestBody
{
	pluck: Pluck;
	pagination?: Pagination;
	data?: object;
};