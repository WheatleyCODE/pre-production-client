import { IUser } from './../types/IUser';
import { AxiosResponse } from 'axios';
import $api from '../http';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/api/users');
  }
}
