'use strict';

// External Modules
import { mirror } from '@chris-talman/isomorphic-utilities';

// Filters
export interface Filters
{
	[filterId: string]: NameFilter | GamesFilter;
};

// Filters: Name
export type NameFilter = string;

// Filters: Games
export interface GamesFilter
{
	[gameId: string]: GamesFilterSelection;
};
export type GamesFilterSelection = keyof typeof SELECTION;
export const SELECTION = mirror
(
	{
		/** Guild must have the game. */
		require: true,
		/** Guild must have at least one selected game: this one or another. */
		requireOne: true,
		/** Guild must not have game. */
		forbid: true
	}
);