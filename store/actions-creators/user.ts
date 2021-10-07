import { UserService } from '@services';
import { Dispatch } from 'react';
import { AuthService } from '@services';
import { IUser } from '@t';
import { UserAction, UserActionTypes } from '@t/user';
import axios from 'axios';
import { AuthResponse } from '@t/response/AuthResponse';
import { API_URL } from '@http';
import { PostsService } from '@services';
import { IPost } from '@t';

export const setTestAc = (arr: any[]): UserAction => {
  return {
    type: UserActionTypes.SET_TEST,
    payload: arr,
  };
};

export const setPostsAc = (posts: IPost[]): UserAction => {
  return {
    type: UserActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const setUserAc = (user: IUser): UserAction => {
  return {
    type: UserActionTypes.SET_USER,
    payload: user,
  };
};

export const setAuthAc = (boolean: boolean): UserAction => {
  return {
    type: UserActionTypes.SET_AUTH,
    payload: boolean,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await AuthService.login(email, password);
      console.log(res);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAc(true));
      dispatch(setUserAc(res.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const registration = (email: string, password: string, userName: string) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await AuthService.registration(email, password, userName);
      console.log(res);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAc(true));
      dispatch(setUserAc(res.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await AuthService.logout();
      console.log(res);
      localStorage.removeItem('token');
      dispatch(setAuthAc(false));
      dispatch(setUserAc({} as IUser));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
        withCredentials: true,
      });
      console.log(res);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAc(true));
      dispatch(setUserAc(res.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await UserService.fetchUsers();
      console.log(res);
      dispatch(setTestAc(res.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await PostsService.fetchPosts();
      console.log(res.data);
      dispatch(setPostsAc(res.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};
