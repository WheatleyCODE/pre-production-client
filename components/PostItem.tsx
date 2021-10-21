import { API_URL } from '@http';
import { IPost } from '@t';
import React, { FC } from 'react';
import s from '@s.components/PostItem.module.scss';

export interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <div className={s.post}>
      <h3>Автор поста: {post.author.userName}</h3>
      <hr />
      <h2>{post.title}</h2>
      <hr />
      <img src={`${API_URL}/${post.image}`} alt="picture" />
      <hr />
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
