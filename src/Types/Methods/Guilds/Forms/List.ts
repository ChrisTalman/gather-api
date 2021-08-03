'use strict';

// Types
import * as ApiDataForms from '../../../Api/Data/Forms';
import { RequestOptionsWrapper } from '../../../Methods';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <ApiDataForms.GetRequestBody, 'pluck' | 'pagination'>
{
	guildId: string;
	filters?: ApiDataForms.GetRequestBodyDataFilters;
	sort?: ApiDataForms.GetRequestBodyDataSort;
};

// API
export { GetRequestBody, GetResponseBody } from '../../../Api/Data/Forms';