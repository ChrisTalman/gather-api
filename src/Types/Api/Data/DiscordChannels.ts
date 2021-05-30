'use strict';

export interface DiscordChannels extends Array <DiscordChannel> {};
export interface DiscordChannel
{
	id: string;
	type: DiscordChannelType;
	name: string;
	sendable?: boolean;
};
export type DiscordChannelType = 'text' | 'voice' | 'category' | 'news' | 'store';