'use strict';

// Types
import { Identity } from './Identity';

export interface UserIdentity
{
	id: string;
	type: 'person' | 'bot';
	username: string;
	avatar?: string;
	publicIdentity: Identity;
	official?: boolean;
};