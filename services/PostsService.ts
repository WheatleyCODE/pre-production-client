import { IPost } from '@t/IPost';
import { AxiosResponse } from 'axios';
import $api from '../http';

export class PostsService {
  static fetchPosts(): Promise<AxiosResponse<IPost[]>> {
    return $api.get<IPost[]>('/posts/all');
  }
}
