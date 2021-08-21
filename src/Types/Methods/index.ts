'use strict';

export interface RequestOptions
{
	accessToken?: string | false;
	useQueue?: boolean;
};
export interface RequestOptionsWrapper
{
	options?: RequestOptions;
};