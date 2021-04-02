'use strict';

// Internal Modules
import { Resource } from 'src/Modules/Resource';

// Methods
import { create } from './Create';
import { update } from './Update';

export class GuildRoles extends Resource
{
	public create = create;
	public update = update;
};