'use strict';

export interface RateLimit
{
	limit: number;
	reset: number;
	consumed: number;
};