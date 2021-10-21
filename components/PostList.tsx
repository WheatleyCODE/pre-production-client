import { IPost } from '@t';
import React, { FC } from 'react';
import PostItem from './PostItem';
import s from '@s.components/PostList.module.scss';

export interface IPostListProps {
  posts: IPost[];
}

const PostList: FC<IPostListProps> = ({ posts }) => {
  return (
    <div className={s.main}>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
