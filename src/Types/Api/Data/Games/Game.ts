'use strict';

// Types
import { RequestBody } from 'src/Types/Api/Request';
import { ResponseBody } from 'src/Types/Api/Response';

// Data
import { Game } from './';
export { Game } from './';

// GET
export interface GetRequestBody extends Pick <RequestBody, 'pluck'> {};
export interface GetResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Game;
};