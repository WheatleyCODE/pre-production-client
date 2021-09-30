import { IUser } from './IUser';
export interface PlayerState {
  test: any[];
  isAuth: boolean;
  user: IUser;
}

export enum PlayerActionTypes {
  SET_TEST = 'SET_TEST',
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
}

interface SetTestAction {
  type: PlayerActionTypes.SET_TEST;
  payload: any[];
}

interface SetUserAction {
  type: PlayerActionTypes.SET_USER;
  payload: IUser;
}

interface SetAuthAction {
  type: PlayerActionTypes.SET_AUTH;
  payload: boolean;
}

export type PlayerAction = SetTestAction | SetUserAction | SetAuthAction;
