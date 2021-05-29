'use strict';

// Base
export type Identity =
	DiscordIdentity |
	SteamIdentity |
	BlizzardIdentity |
	MicrosoftIdentity |
	GoogleIdentity
;
export interface BaseIdentity
{
	id: string;
	platform: BaseIdentityPlatform;
};
export type BaseIdentityPlatform = 'discord' | 'steam' | 'blizzard' | 'microsoft' | 'google';

// Discord
export interface DiscordIdentity extends BaseIdentity
{
	platform: 'discord';
	data: DiscordIdentityData;
};
export interface DiscordIdentityData
{
	id: string;
	username: string;
	discriminator: string;
	avatar?: string;
	email: string;
	updated: number;
};

// Steam
export interface SteamIdentity extends BaseIdentity
{
	platform: 'steam';
	data: SteamIdentityData;
};
export interface SteamIdentityData
{
	id: string;
	username: string;
	discriminator: string;
	updated: number;
};

// Blizzard
export interface BlizzardIdentity extends BaseIdentity
{
	platform: 'blizzard';
	data: BlizzardIdentityData;
};
export interface BlizzardIdentityData
{
	id: string;
	username: string;
	discriminator: string;
	updated: number;
};

// Microsoft
export interface MicrosoftIdentity extends BaseIdentity
{
	platform: 'microsoft';
	data: MicrosoftIdentityData;
};
export interface MicrosoftIdentityData
{
	xbox: MicrosoftIdentityDataXbox;
	updated: number;
};
export interface MicrosoftIdentityDataXbox
{
	id: string;
	gamertag: string;
	gameAvatar: string;
	updated: number;
};

// Google
export interface GoogleIdentity extends BaseIdentity
{
	platform: 'google';
	data: GoogleIdentityData;
};
export interface GoogleIdentityData
{
	id: string;
	name: string;
	picture: string;
	updated: number;
};