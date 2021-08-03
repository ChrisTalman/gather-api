'use strict';

// Types
import { RequestBody } from '../../../../Api/Request';
import { ResponseBody } from '../../../../Api/Response';
import * as ApiDataForms from '../../../../Api/Data/Forms';

// Data
export interface Forms extends Array <ApiDataForms.Form> {};

// GET
export interface GetRequestBody extends Pick <RequestBody, 'data' | 'pluck' | 'pagination'>
{
	data?: GetRequestBodyData;
};
export interface GetRequestBodyData
{
	filters?: GetRequestBodyDataFilters;
	sort?: GetRequestBodyDataSort;
};
export interface GetRequestBodyDataFilters
{
	name?: string;
	open?: boolean;
};
export interface GetRequestBodyDataSort
{
	type: 'lastSubmitted';
	order: 'ascending' | 'descending';
};
export interface GetResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Forms;
};