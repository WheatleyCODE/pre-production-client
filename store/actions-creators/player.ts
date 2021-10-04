import { UserService } from '../../services/UserService';
import { Dispatch } from 'react';
import { AuthService } from '@services';
import { IUser } from '../../types/IUser';
import { PlayerAction, PlayerActionTypes } from '../../types/player';
import axios from 'axios';
import { AuthResponse } from '../../types/response/AuthResponse';
import { API_URL } from '../../http';
import { PostsService } from '@services/PostsService';

export const setTestAc = (arr: any[]): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_TEST,
    payload: arr,
  };
};

export const setUserAc = (user: IUser): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_USER,
    payload: user,
  };
};

export const setAuthAc = (boolean: boolean): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_AUTH,
    payload: boolean,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
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

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
    try {
      const res = await AuthService.registration(email, password);
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
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
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
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
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
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
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
  return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
    try {
      const res = await PostsService.fetchPosts();
      console.log(res.data);
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};
