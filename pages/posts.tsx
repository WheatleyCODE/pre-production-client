import { InputType, useActions, useInput, useTypedSelector } from '@hooks';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useEffect, useState } from 'react';
import s from '@s.pages/posts.module.scss';
import PostList from '@components/PostList';
import axios from 'axios';
import { IPost } from '@t';
import { FileUpload } from '@components';
import { Button, Input } from '@components/UI';

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get<IPost[]>('http://localhost:5000/posts/all');

  if (!res.data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: res.data,
    },
  };
};

const Posts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { createPosts } = useActions();
  const { user, isAuth } = useTypedSelector((state) => state.user);
  const [content, setContent] = useState('');
  const [image, setImage] = useState<any>(null);
  const titleInput = useInput('', 'Заголовок', InputType.TEXT);

  // useEffect(() => {
  //   fetchPosts();
  // }, []); onChange={(e) => setImage(e.)}

  const addPost = async () => {
    createPosts(titleInput.default.value, content, image);
  };

  return (
    <div className={s.main}>
      {isAuth && user.role === 'ADMIN' && (
        <div className={s.addpost}>
          <h3>Написать пост</h3>
          <FileUpload setFile={setImage} accept="image/*">
            <Button className={s.uploadFile} text="Загрузите обложку" buttonStyle="" />
          </FileUpload>
          <Input
            icon="no"
            validError={titleInput.validError}
            defaultParams={titleInput.default}
            isError={titleInput.isError}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={s.comment}
            placeholder="Тело поста"
          />
          <Button
            disable={!titleInput.isValid || image === null || content.length < 3}
            onClickHandler={addPost}
            className={s.uploadFile}
            text="Добавить пост"
            buttonStyle=""
          />
        </div>
      )}
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
