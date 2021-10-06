import { useActions, useTypedSelector } from '@hooks';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import s from '@s.pages/posts.module.scss';

const Posts: NextPage = () => {
  const { fetchPosts } = useActions();
  const { posts } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={s.main}>
      <h1>Posts!</h1>
      {posts.map((post) => {
        console.log(post.image);
        return (
          <div className={s.post} key={post._id}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
