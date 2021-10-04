import { useActions } from '@hooks';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Posts: NextPage = () => {
  const { fetchPosts } = useActions();
  useEffect(() => {
    fetchPosts();
  });

  return (
    <div>
      <h1>Posts!</h1>
    </div>
  );
};

export default Posts;
