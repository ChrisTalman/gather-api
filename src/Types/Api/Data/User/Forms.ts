'use strict';

// Types
import { Guild } from '../../../Api/Data/Guilds';
import { Form } from '../../../Api/Data/Forms';
import { UserIdentity } from '../../../Api/Data/User';
import { Identity } from '../../../Api/Data/User/Identity';

export interface Submission
{
	id: string;
	created: number;
	formTimestamp: number;
	state: State;
	submitted?: number;
	revoked?: boolean;
	cancelled?: number;
	decided?: number;
	/** The identity of the submitter will be hidden from reviewers, and comments disabled. */
	anonymous?: boolean;
	form: Form;
	guild: Guild;
	user: UserIdentity;
	decider?: UserIdentity;
	elements: SubmissionElements;
	labels: SubmissionLabels;
};
export type State = 'draft' | 'submitted' | 'approved' | 'rejected' | 'cancelled';
export interface SubmissionLabels extends Array <SubmissionLabel> {};
export interface SubmissionLabel
{
	id: string;
	name: string;
};

// Base Submission Elements
export interface SubmissionElements extends Array<SubmissionElement> {};
export type SubmissionElement =
	TextInputSubmissionElement |
	OptionsSubmissionElement |
	TimezoneSubmissionElement |
	IdentitySubmissionElement |
	CheckboxSubmissionElement |
	DatetimeSubmissionElement |
	AvailabilitySubmissionElement
;
export interface BaseSubmissionElement
{
	id: string;
	revoked?: boolean;
};

// Text Input
export interface TextInputSubmissionElement extends BaseSubmissionElement
{
	value: string;
};

// Options
export interface OptionsSubmissionElement extends BaseSubmissionElement
{
	value: Array <string>;
};

// Timezone
export interface TimezoneSubmissionElement extends BaseSubmissionElement
{
	value: number;
};

// Identity
export interface IdentitySubmissionElement extends BaseSubmissionElement
{
	value: string;
	identity: Identity;
};

// Checkbox
export interface CheckboxSubmissionElement extends BaseSubmissionElement
{
	value: true;
};

// Datetime
export interface DatetimeSubmissionElement extends BaseSubmissionElement
{
	/** Unix milliseconds. */
	value: number;
};

// Availability
export interface AvailabilitySubmissionElement extends BaseSubmissionElement
{
	value: AvailabilitySubmissionElementValue;
};
export interface AvailabilitySubmissionElementValue
{
	days: AvailabilitySubmissionElementValueDays;
	/** IANA timezone. */
	timezone: string;
};
export interface AvailabilitySubmissionElementValueDays
{
	/** Array of hour offsets in minutes, in the submitted timezone. */
	[day: number]: Array <number>;
};
export interface AvailabilitySubmissionElementValueDaysObjectEntries extends Array <[string, AvailabilitySubmissionElementValueDays[0]]> {};