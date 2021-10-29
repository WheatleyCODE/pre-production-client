import { IPost } from '@t';
import { AxiosResponse } from 'axios';
import $api from '@http';

export class PostsService {
  static fetchPosts(): Promise<AxiosResponse<IPost[]>> {
    return $api.get<IPost[]>('/posts/all');
  }

  static createPost(title: string, content: string, image: any): Promise<AxiosResponse<IPost>> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    return $api.post<IPost>('/posts/create', formData);
  }
}
