'use strict';

// Types
import { RequestBody } from '../../../../Api/Request';
import { ResponseBody } from '../../../../Api/Response';
import { RequestOptionsWrapper } from '../../../../Methods';
import { Submission, Submissions } from '../../../../Api/Data/Guilds/Forms/Submissions';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <GetRequestBody, 'pluck' | 'pagination'>
{
	guildId: string;
	filters?: GetRequestBodyDataFilters;
};

// Request
export interface GetRequestBody extends Pick <RequestBody, 'data' | 'pluck' | 'pagination'>
{
	data?: GetRequestBodyData;
};
export interface GetRequestBodyData
{
	filters?: GetRequestBodyDataFilters;
};
export interface GetRequestBodyDataFilters
{
	username?: string;
	forms?: Array <string>;
	states?: Array <Submission['state']>;
	labels?: Array <string>;
	userId?: string;
};

// Response
export interface GetResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Submissions;
};