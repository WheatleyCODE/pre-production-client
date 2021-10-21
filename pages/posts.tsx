import { useActions, useTypedSelector } from '@hooks';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import s from '@s.pages/posts.module.scss';
import PostList from '@components/PostList';

const Posts: NextPage = () => {
  const { fetchPosts } = useActions();
  const { posts } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={s.main}>
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
