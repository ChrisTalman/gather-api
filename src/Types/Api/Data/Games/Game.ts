'use strict';

// Types
import { RequestBody } from '../../../Api/Request';
import { ResponseBody } from '../../../Api/Response';

// Data
import { Game } from './';
export { Game } from './';

// GET
export interface GetRequestBody extends Pick <RequestBody, 'pluck'> {};
export interface GetResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Game;
};