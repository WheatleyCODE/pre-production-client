import { IPost } from '@t';
import { IUser } from '@t';
export interface UserState {
  test: any[];
  isAuth: boolean;
  user: IUser;
  posts: IPost[];
}

export enum UserActionTypes {
  SET_TEST = 'SET_TEST',
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
  SET_POSTS = 'SET_POSTS',
}

interface SetTestAction {
  type: UserActionTypes.SET_TEST;
  payload: any[];
}

interface SetPostsAction {
  type: UserActionTypes.SET_POSTS;
  payload: IPost[];
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH;
  payload: boolean;
}

export type UserAction = SetTestAction | SetUserAction | SetAuthAction | SetPostsAction;
