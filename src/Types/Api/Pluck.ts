'use strict';

export type Pluck = string | ArrayPluck | ObjectPluck;
export interface ArrayPluck extends Array<Pluck> {};
export interface ObjectPluck
{
	[key: string]: string | true | ArrayPluck | ObjectPluck;
};
export interface PureObjectPluck
{
	[key: string]: true | PureObjectPluck;
};