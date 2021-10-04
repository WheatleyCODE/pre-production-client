import { IPost } from '@t';
import { IUser } from '@t';
export interface PlayerState {
  test: any[];
  isAuth: boolean;
  user: IUser;
  posts: IPost[];
}

export enum PlayerActionTypes {
  SET_TEST = 'SET_TEST',
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
  SET_POSTS = 'SET_POSTS',
}

interface SetTestAction {
  type: PlayerActionTypes.SET_TEST;
  payload: any[];
}

interface SetPostsAction {
  type: PlayerActionTypes.SET_POSTS;
  payload: IPost[];
}

interface SetUserAction {
  type: PlayerActionTypes.SET_USER;
  payload: IUser;
}

interface SetAuthAction {
  type: PlayerActionTypes.SET_AUTH;
  payload: boolean;
}

export type PlayerAction = SetTestAction | SetUserAction | SetAuthAction | SetPostsAction;
