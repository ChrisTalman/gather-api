'use strict';

// Types
import { RequestBody } from '../../../Api/Request';
import { ResponseBody } from '../../../Api/Response';
import { RequestOptionsWrapper } from '../../../Methods';
import * as FormSubmissions from '../../../Api/Data/Forms/Submissions';
import { Elements } from './Create';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <PatchRequestBody, 'pluck'>
{
	id: string;
	formId: string;
	elements?: Elements;
	state?: FormSubmissions.State;
	locked?: boolean;
};

// Request
export interface PatchRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data: PatchRequestBodyData;
};
export interface PatchRequestBodyData
{
	state?: FormSubmissions.State;
	elements?: Elements;
	locked?: boolean;
};

// Response
export interface PatchResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: PatchResponseBodyData;
};
export interface PatchResponseBodyData
{
	id: string;
};