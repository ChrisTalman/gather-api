'use strict';

// Types
import { RateLimit } from './RateLimit';
import { ResponsePagination } from './Pagination';

export interface ResponseBody
{
	rateLimit: RateLimit;
	pagination: ResponsePagination;
	data: object;
	error: object;
};