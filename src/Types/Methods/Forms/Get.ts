'use strict';

// Types
import * as ApiDataForms from '../../Api/Data/Forms';
import { RequestOptionsWrapper } from '../../Methods';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <ApiDataForms.GetRequestBody, 'pluck'>
{
	formId: string;
};

// API
export { GetRequestBody, GetResponseBody } from '../../Api/Data/Forms';