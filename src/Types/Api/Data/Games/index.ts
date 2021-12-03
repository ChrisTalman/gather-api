'use strict';

// Types
import { RequestBody } from '../../../Api/Request';
import { ResponseBody } from 'src/Types/Api/Response';

// Data
export interface Games extends Array <Game> {};
export interface Game
{
	id: string;
	name: string;
	description: string;
	logoMinimal: string;
	logoLandscape: string;
	aliases: GameAliases;
	guildNouns: GameGuildNouns;
	urlNames: GameUrlNames;
};
export interface GameAliases extends Array <GameAlias> {};
export interface GameAlias
{
	id: string;
	name: string;
};
export interface GameGuildNouns extends Array <GameGuildNoun> {};
export interface GameGuildNoun
{
	id: string;
	name: string;
};
export interface GameUrlNames extends Array <GameUrlName> {};
export interface GameUrlName
{
	id: string;
	name: string;
};

// GET
export interface GetRequestBody extends Pick <RequestBody, 'data' | 'pluck' | 'pagination'>
{
	data?: GetRequestBodyData;
};
export interface GetRequestBodyData
{
	filters?: GetParametersFilters;
};
export interface GetParametersFilters
{
	name?: string;
};
export interface GetResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: Games;
};