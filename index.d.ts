declare module 'gather-api'
{
	// External Modules
	import { Domain } from '@chris-talman/request';

	// Types
	import { DefinitionDebug } from '@chris-talman/request';

	// Client
	export class Client
	{
		public readonly accessToken: string;
		public readonly secret?: string;
		public readonly url: string;
		public readonly domain: Domain;
		/** Debug options to pass to the request module. */
		public readonly requestDebug?: DefinitionDebug;
		constructor({accessToken, secret, url, requestDebug}: {accessToken: Client['accessToken'], secret?: Client['secret'], url?: Client['url'], requestDebug?: Client['requestDebug']});
		verifySignature({signature, requestBody}: {signature: string, requestBody: string | object}): boolean;
		generateRequestBodySignature({requestBody}: {requestBody: string | object}): string;
		public readonly guilds: Guilds;
		public readonly forms: Forms;
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

	// Guilds
	class Forms extends Resource
	{
		public elements: FormsElements;
	}

	// Forms: Elements
	class FormsElements extends Resource
	{
		public get({timestamp, formId}: {timestamp: number, formId: string} & RequestOptionsWrapper): Promise <FormsElementsGetResult>;
	}
	export interface FormsElementsGetResult extends Pick <ResponseBody <FormElements>, 'data'> {}
	export type FormElements = Array <FormElement>;
	export type FormElement =
		TextInputElement |
		OptionsElement |
		TimezoneOffsetElement |
		IdentityElement |
		CheckboxElement |
		DatetimeElement |
		AvailabilityElement
	;
	export interface BaseElement
	{
		id: string;
		type: 'TextInput' | 'Options' | 'TimezoneOffset' | 'Identity' | 'Checkbox' | 'Datetime' | 'Availability';
		position: number;
		optional?: boolean;
	}
	export interface TextInputElement extends BaseElement
	{
		type: 'TextInput';
		label: string;
		description?: string;
		min?: number;
		max?: number;
		multiline?: boolean;
		pattern?: TextInputPattern;
	}
	export type TextInputPattern = 'integer' | 'float';
	export interface OptionsElement extends BaseElement
	{
		type: 'Options';
		label: string;
		description?: string;
		min?: number;
		max?: number;
		multiple?: boolean;
		options: Options;
	}
	export interface Options extends Array <Option> {}
	export interface Option
	{
		id: string;
		position: number;
		label: string;
	}
	export interface TimezoneOffsetElement extends BaseElement
	{
		type: 'TimezoneOffset';
		label: string;
		description: string;
		min: number;
		max: number;
	}
	export interface IdentityElement extends BaseElement
	{
		type: 'Identity';
		label: string;
		description: string;
		platforms: IdentityElementPlatforms;
	}
	export interface IdentityElementPlatforms extends Array <IdentityElementPlatform> {}
	export type IdentityElementPlatform = 'discord' | 'steam' | 'blizzard' | 'google';
	export interface CheckboxElement extends BaseElement
	{
		type: 'Checkbox';
		label: string;
		description: string;
	}
	export interface DatetimeElement extends BaseElement
	{
		type: 'Datetime';
		label: string;
		description: string;
	}
	export interface AvailabilityElement extends BaseElement
	{
		type: 'Availability';
		label: string;
		description: string;
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
		resource: ApiErrorResourceName;
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