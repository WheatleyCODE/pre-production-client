import { FC, useEffect, useState } from 'react';
import { CommentItem } from '@components';
import s from '@s.components/CommentList.module.scss';
import { IComments } from '@t/ITrack';
import { TrackService } from '@services';
import { InputType, useActions, useInput, useTypedSelector } from '@hooks';
import { Button, Input } from './UI';
import { useRouter } from 'next/router';

export interface ICommentListProps {
  comments: IComments[];
}
export const CommentList: FC<ICommentListProps> = ({ comments }) => {
  const { fetchCurrentTrack } = useActions();
  const router = useRouter();
  const { user, isAuth } = useTypedSelector((state) => state.user);
  const userNameInput = useInput(user.userName, 'Name', InputType.TEXT);
  const [comment, setComment] = useState('');

  useEffect(() => {
    userNameInput.setValue(user.userName);
  }, [user.userName]);

  const addPost = async () => {
    if (typeof router.query.id === 'string') {
      await TrackService.addComment(userNameInput.default.value, comment, router.query.id);
      fetchCurrentTrack(router.query.id);
    }
  };

  return (
    <div className={s.list}>
      <h2 className={s.title}>Комментарии</h2>
      {!isAuth && (
        <h3 onClick={() => router.push('/login')} className={s.notAuth}>
          Только авторизованные пользоватли могут оставлять коментрии
        </h3>
      )}
      {isAuth && (
        <div className={s.add}>
          <h3>Оставить коментарий</h3>
          <Input
            icon="no"
            validError={userNameInput.validError}
            defaultParams={userNameInput.default}
            isError={userNameInput.isError}
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={s.comment}
            placeholder="Комментарий..."
          />
          <Button
            buttonStyle="none"
            text="Оставить коментарий"
            onClickHandler={() => {
              addPost();
            }}
          />
        </div>
      )}
      <div className={s.comments}>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};
