'use strict';

// Types
import { RequestBody } from '../../../Api/Request';

// Data
import { Filters } from './Filters';
import { Guilds } from './Results';
export { Filters };

// GET
export interface GetRequestBody extends Pick <RequestBody, 'pluck'>
{
	filters?: Filters;
	pagination?: GetParametersPagination;
};
export interface GetParametersPagination
{
	limit?: number;
	sessionId?: string;
};
export interface GetResponseBody
{
	sessionId: string;
	guilds: Guilds;
};