'use strict';

// Types
import { Pluck } from 'src/Types/Api/Pluck';
import * as ApiDataSearch from '../../Api/Data/Search';
import { RequestOptionsWrapper } from '../../Methods';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <ApiDataSearch.GetRequestBody, 'pluck'>
{
	filters?: ApiDataSearch.Filters;
	pagination?: ApiDataSearch.GetParametersPagination;
	pluck: Pluck;
};

// API
export { GetRequestBody, GetResponseBody } from '../../Api/Data/Search';