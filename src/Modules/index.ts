'use strict';

// Types
export interface RequestOptions
{
	accessToken?: string;
	useQueue?: boolean;
};
export interface RequestOptionsWrapper
{
	options?: RequestOptions;
};

// Exports
export { Client } from './Client';
export { ApiError } from './ApiError';
export { verifySignature, generateRequestBodySignature } from './Signature';