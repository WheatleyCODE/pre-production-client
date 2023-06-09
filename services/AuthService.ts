import { AuthResponse } from '@t/response/AuthResponse';
import $api from '@http';
import { AxiosResponse } from 'axios';

export class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', { email, password });
  }

  static async registration(
    email: string,
    password: string,
    userName: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', { email, password, userName });
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
}
