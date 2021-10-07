import { FC, useState } from 'react';
import { CommentItem } from '@components';
import s from '@s.components/CommentList.module.scss';
import { IComments } from '@t/ITrack';
import { TrackService } from '@services';
import { InputType, useActions, useInput } from '@hooks';
import { Button, Input } from './UI';

export interface ICommentListProps {
  comments: IComments[];
}
export const CommentList: FC<ICommentListProps> = ({ comments }) => {
  const { fetchCurrentTrack } = useActions();
  const userNameInput = useInput('', 'Name', InputType.TEXT);
  const [comment, setComment] = useState('');

  const addPost = async () => {
    await TrackService.addComment(userNameInput.default.value, comment, '615d7871d539150fc48dc3c3');
    fetchCurrentTrack('615d7871d539150fc48dc3c3');
  };

  return (
    <div className={s.list}>
      <h2 className={s.title}>Комментарии</h2>
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
      <div className={s.comments}>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};
