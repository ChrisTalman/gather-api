'use strict';

// External Modules
import { guaranteeResultJson, Result } from '@chris-talman/request';

export function resolveApiResponseJson(result: Result <any>)
{
	const json = guaranteeResultJson(result);
	return json;
};