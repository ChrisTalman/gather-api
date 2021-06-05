'use strict';

// Types
import { RequestBody } from '../../../../Api/Request';
import { ResponseBody } from '../../../../Api/Response';
import { RequestOptionsWrapper } from '../../../../Methods';
import { Submission } from '../../../../Api/Data/Guilds/Forms/Submissions';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <GetRequestBody, 'pluck'>
{
	submissionId: string;
	guildId: string;
};

// Request
export interface GetRequestBody extends Pick <RequestBody, 'pluck'> {};

// Response
export interface GetResponseBody extends Pick <ResponseBody, 'data'>
{
	data: Submission;
};