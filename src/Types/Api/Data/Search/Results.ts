'use strict';

export interface Guilds extends Array <Guild> {};
export interface Guild
{
	id: string;
	name: string;
	description: string;
	logo: string;
	explorer: GuildExplorer;
	games: Games;
	platforms: GuildPlatforms;
};
export interface GuildExplorer
{
	flow: GuildExplorerFlow;
};
export type GuildExplorerFlow = StandardGuildExplorerFlow | FormGuildExplorerFlow | UrlGuildSearchFlow;
export interface BaseGuildSearchFlow
{
	type: 'registration' | 'form' | 'url';
};
export interface StandardGuildExplorerFlow extends BaseGuildSearchFlow
{
	type: 'registration';
	learnMoreUrl?: string;
};
export interface FormGuildExplorerFlow extends BaseGuildSearchFlow, Pick <StandardGuildExplorerFlow, 'learnMoreUrl'>
{
	type: 'form';
	formId: string;
};
export interface UrlGuildSearchFlow extends BaseGuildSearchFlow
{
	type: 'url';
	label: string;
	url: string;
};
export interface Games extends Array <Game> {};
export interface Game
{
	id: string;
	name: string;
	logoMinimal: string;
	logoLandscape: string;
};
export interface GuildPlatforms extends Array <GuildPlatform> {};
export interface GuildPlatform
{
	id: string;
	name: string;
};