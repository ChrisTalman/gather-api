'use strict';

// Types
import { RequestBody } from '../../Request';
import { ResponseBody } from '../../Response';
import { DiscordChannels } from '../DiscordChannels';
import * as Submissions from './Submissions';

// Data
export interface Form
{
	id: string;
	name: string;
	open?: boolean;
	onboard?: string;
	decision?: boolean;
	exclusive?: boolean;
	/** Messages to display to submitter when submission is in different states. */
	messages?: FormMessages;
	discordChannels?: DiscordChannels;
};
export type FormMessages =
{
	[Key in Submissions.State]?: string;
};

// GET
export interface GetRequestBody extends Pick <RequestBody, 'pluck'> {};
export interface GetResponseBody extends Pick <ResponseBody, 'data'>
{
	data: Form;
};