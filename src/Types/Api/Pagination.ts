'use strict';

export interface Pagination
{
	limit?: number;
	before?: string;
	after?: string;
};

export interface ResponsePagination
{
	limit: number;
};