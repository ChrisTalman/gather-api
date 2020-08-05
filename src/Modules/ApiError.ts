'use strict';

// External Modules
import { RequestJsonError } from '@chris-talman/request';

// Types
interface ApiErrorPayload
{
	code: string;
};

// Base Class
export class ApiError extends Error
{
	public readonly payload: ApiErrorPayload;
	constructor({payload}: {payload: ApiErrorPayload})
	{
		const message = `Gather Error: ${payload.code}`;
		super(message);
		this.payload = payload;
	};
};

/** If promise rejects with an API error, the error is thrown in a more readable form. */
export async function throwRejectionApiError <GenericResolution> (promise: Promise<GenericResolution>)
{
	let result: GenericResolution;
	try
	{
		result = await promise;
	}
	catch (error)
	{
		throwApiError(error);
		throw new Error('throwApiError() failed');
	};
	return result;
};

export function throwApiError(error: any)
{
	const apiError: RequestJsonError <ApiErrorPayload> = error;
	if (apiError instanceof RequestJsonError)
	{
		const wrapper = new ApiError({payload: apiError.json});
		throw wrapper;
	}
	else
	{
		throw error;
	};
};