// Интерфейс для Начальный стейт
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
  testUser:
}

// Константы в перечислении
export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// Интрефейсы для всех экшенов
interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccesAction {
  type: UserActionTypes.FETCH_USERS_SUCCES;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

// Тип акшена
export type UserAction = FetchUserAction | FetchUserSuccesAction | FetchUserErrorAction;
