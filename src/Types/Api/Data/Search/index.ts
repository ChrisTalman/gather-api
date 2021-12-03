'use strict';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { ResponseBody } from 'src/Types/Api/Response';

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
export interface GetResponseBody extends Pick <ResponseBody, 'data'>
{
	data: GetResponseBodyData;
};
export interface GetResponseBodyData
{
	sessionId: string;
	guilds: Guilds;
};