'use strict';

export interface RequestOptions
{
	accessToken?: string;
	useQueue?: boolean;
};
export interface RequestOptionsWrapper
{
	options?: RequestOptions;
};