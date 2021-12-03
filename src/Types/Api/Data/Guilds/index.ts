'use strict';

export interface Guild
{
	id: string;
	name: string;
	logo: string;
	premium?: GuildPremium;
};
export interface GuildPremium
{
	current: boolean;
	active: boolean;
};