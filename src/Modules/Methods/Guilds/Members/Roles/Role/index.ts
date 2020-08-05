'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Methods
import { revoke } from './Revoke';

export class GuildMemberRolesRole extends Resource
{
	public revoke = revoke;
};