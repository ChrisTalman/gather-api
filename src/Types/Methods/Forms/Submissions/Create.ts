'use strict';

// Types
import { RequestBody } from '../../../Api/Request';
import { ResponseBody } from '../../../Api/Response';
import { RequestOptionsWrapper } from '../../../Methods';
import * as FormSubmissions from '../../../Api/Data/Forms/Submissions';

// Method
export interface MethodParameters extends RequestOptionsWrapper, Pick <PostRequestBody, 'pluck'>
{
	formId: string;
	formTimestamp: number;
	venue?: Venue;
	elements: Elements;
	state: FormSubmissions.State;
};

// Venue
export interface Venue
{
	token: string;
};

// Elements
export interface Elements
{
	[elementId: string]: Element;
};
export type Element =
	TextInputElement |
	OptionsElement |
	TimezoneOffsetElement |
	IdentityElement |
	CheckboxElement |
	DatetimeElement |
	AvailabilityElement |
	FileInputElement |
	null
;
export interface TextInputElement
{
	value: string | null;
};
export interface OptionsElement
{
	value: Array <string> | null;
};
export interface TimezoneOffsetElement
{
	value: number | null;
};
export interface IdentityElement
{
	value: string | null;
};
export interface CheckboxElement
{
	value: true | null;
};
export interface DatetimeElement
{
	value: number | null;
};
export interface AvailabilityElement
{
	value: AvailabilityElementValue | null;
};
export interface AvailabilityElementValue
{
	timezone: string;
	days: AvailabilityElementValueDays;
};
export type AvailabilityElementValueDays =
{
	/** Array of hour offsets in minutes, in the submitted timezone. */
	[day: number]: Array <number>;
};
export interface FileInputElement
{
	value: FileInputElementValue;
};
export type FileInputElementValue = Array <FileInputElementValueItem>;
export type FileInputElementValueItem = DiscordFileInputElementValue | UrlFileInputElementValue;
export interface DiscordFileInputElementValue
{
	type: 'Discord';
	id: string;
	url: string;
	name?: string;
};
export interface UrlFileInputElementValue
{
	type: 'Url';
	url: string;
};

// Request
export interface PostRequestBody extends Pick <RequestBody, 'data' | 'pluck'>
{
	data: PostRequestBodyData;
};
export interface PostRequestBodyData
{
	formTimestamp: number;
	state: FormSubmissions.State;
	elements: Elements;
	venue?: Venue;
};

// Response
export interface PostResponseBody extends Pick <ResponseBody, 'data' | 'pagination'>
{
	data: PostResponseBodyData;
};
export interface PostResponseBodyData
{
	id: string;
};