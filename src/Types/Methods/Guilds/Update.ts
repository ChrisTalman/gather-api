'use strict';

// Types
import { RequestBody } from '../../Api/Request';
import { ResponseBody } from '../../Api/Response';
import { RequestOptionsWrapper } from '../../Methods';
import { Guild } from '../../Api/Data/Guilds';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <PatchRequestBody, 'pluck'>
{
	guildId: string;
	data: PatchRequestBodyData;
};

// Request
export interface PatchRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data: PatchRequestBodyData;
};
export interface PatchRequestBodyData extends Partial <Pick <Guild, 'name' | 'logo'>> {};

// Response
export interface PatchResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Guild;
};