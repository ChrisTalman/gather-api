'use strict';

// Types
import { Pluck } from 'src/Types/Api/Pluck';
import * as ApiDataGames from '../../Api/Data/Games';
import { RequestOptionsWrapper } from '../../Methods';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <ApiDataGames.GetRequestBody, 'pluck'>
{
	gameId: string;
	pluck: Pluck;
};

// API
export { GetRequestBody, GetResponseBody } from '../../Api/Data/Games/Game';