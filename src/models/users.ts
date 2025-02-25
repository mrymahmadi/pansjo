/*export interface IUser {
  id?: number;
  email: string;
  name: string;
  posts?: [] | string;
}*/
import { ReadableStream } from "node:stream/web";
export interface Iuser {
  id?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  positionId?: number;
  pansionId?: number;
  provinceId?: number;
  cityId?: number;
}
export interface authInfo {
  positionId: number;
}
export interface LoginInput {
  email: string;
}

export interface IPansion {
  id?: number;
  name: string;
  phone: string;
  address: string;
  codeParvane: string;
  numberOfRoom: number;
  numberOfBed: number;
  advancePayment: number;
  priceRent: number;
  chargeMony: number;
  active: boolean;
  imageUrl: string;
  typeOfContract: Contract;
  typeOfPansion: PansionType;
  provinceId: number;
  cityId: number;
}

export interface ImagePart {
  filename: string;
  mimetype: string;
  // deno-lint-ignore no-explicit-any
  filepipe(): ReadableStream;
}

export interface IProvince {
  id?: number;
  name: string;
  enName: string;
  cities: ICity[];
  pansions: IPansion[];
  users: Iuser[];
}

export interface ICity {
  id: number;
  name: string;
  enName: string;
  provinceId: number;
  pansions: string;
  users: string;
}

export interface IPosition {
  id?: number;
  name: string;
  level: Role;
}
export interface IPosInPansion {
  positionId: number;
  pansionId: number;
  assignedAt: Date;
  assignedBy: number;
}

export enum Role {
  GHOST,
  ADMIN,
  USER,
}

export enum Contract {
  ANNUALLY,
  FOUR_MONTHS,
}

export enum PansionType {
  EMPLOYEE,
  STUDENT,
}
//have to do slice this interfaces
