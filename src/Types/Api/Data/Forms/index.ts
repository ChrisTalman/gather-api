'use strict';

// Types
import { RequestBody } from '../../Request';
import { ResponseBody } from '../../Response';
import { DiscordChannels } from '../DiscordChannels';

// Data
export interface Form
{
	id: string;
	name: string;
	open?: boolean;
	onboard?: string;
	decision?: boolean;
	discordChannels?: DiscordChannels;
};

// GET
export interface GetRequestBody extends Pick <RequestBody, 'pluck'> {};
export interface GetResponseBody extends Pick <ResponseBody, 'data'>
{
	data: Form;
};