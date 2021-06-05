'use strict';

// Types
import * as UserForms from '../../User/Forms';

// Submissions
export interface Submissions extends Array <Submission> {};
export interface Submission extends UserForms.Submission
{
	labels: SubmissionLabels;
};

// Labels
export interface SubmissionLabels extends Array <SubmissionLabel> {};
export interface SubmissionLabel
{
	id: string;
	name: string;
};