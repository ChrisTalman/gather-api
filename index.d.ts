declare module 'gather-api'
{
	// External Modules
	import { Domain } from '@chris-talman/request';

	// Client
	export class Client
	{
		public readonly accessToken: string;
		public readonly secret?: string;
		public readonly url: string;
		public readonly domain: Domain;
		constructor({accessToken, secret, url}: {accessToken: Client['accessToken'], secret?: Client['secret'], url?: Client['url']});
		verifySignature({signature, requestBody}: {signature: string, requestBody: string | object}): boolean;
		generateRequestBodySignature({requestBody}: {requestBody: string | object}): string;
		public readonly guilds: Guilds;
	}

	// Resource
	class Resource {}

	// Guilds
	class Guilds extends Resource
	{
		public members: GuildsMembers;
	}

	// Guilds: Members
	class GuildsMembers extends Resource
	{
		public roles: GuildsMembersRoles;
	}

	// Guilds: Members: Roles
	class GuildsMembersRoles extends Resource
	{
		public grant({guildId, memberId, roleId}: {guildId: string, memberId: string, roleId: string} & RequestOptionsWrapper): Promise <GuildsMembersRolesGrantResult>;
		public role: GuildsMembersRolesRole;
	}
	export interface GuildsMembersRolesGrantResult extends Pick <ResponseBody <GuildRole>, 'data'> {}

	// Guilds: Members: Roles: Role
	class GuildsMembersRolesRole extends Resource
	{
		public revoke({guildId, memberId, roleId}: {guildId: string, memberId: string, roleId: string} & RequestOptionsWrapper): Promise <void>;
	}

	// Guilds: Roles
	export interface GuildRole
	{
		id: string;
		name: string;
	}

	// Standard Response
	export interface ResponseBody <GenericData extends object>
	{
		data: GenericData;
		error: ApiErrorPayload;
	}

	// API Error
	export class ApiError extends Error
	{
		public readonly payload: ApiErrorPayload;
	}
	export type ApiErrorPayload =
		ApiErrorNotFound |
		ApiErrorUnauthenticated |
		ApiErrorUnauthorised |
		ApiErrorEntityConflict
	;
	export interface ApiErrorNotFound
	{
		code: 'notFound';
		resourceName: ApiErrorResourceName;
		id?: string;
	}
	export interface ApiErrorUnauthenticated
	{
		code: 'unauthenticated';
		reason?: 'tokenNotFound' | 'gatherWebhookSignatureInvalid';
	}
	export interface ApiErrorUnauthorised
	{
		code: 'unauthorised';
		reason?: 'notOwner' | 'permission';
	}
	export interface ApiErrorEntityConflict
	{
		code: 'entityConflict';
		name: ApiErrorResourceName;
		field?: 'name' | 'token';
	}
	type ApiErrorResourceName =
		'guild' |
		'guild_member' |
		'guild_member_role'
	;

	// Utilities
	export function verifySignature({signature, requestBody, secret}: {signature: string, requestBody: string | object, secret: string}): boolean;
	export function generateRequestBodySignature({requestBody, secret}: {requestBody: string | object, secret: string}): string;

	// Request Options
	export interface RequestOptions
	{
		useQueue?: boolean;
	}
	export interface RequestOptionsWrapper
	{
		options?: RequestOptions;
	}
}