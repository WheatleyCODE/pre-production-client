import { FC, useState } from 'react';
import { CommentItem } from '@components';
import s from '@s.components/CommentList.module.scss';
import { IComments } from '@t/ITrack';
import { TrackService } from '@services';
import { useActions } from '@hooks';

export interface ICommentListProps {
  comments: IComments[];
}
export const CommentList: FC<ICommentListProps> = ({ comments }) => {
  const { fetchCurrentTrack } = useActions();
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');

  const addPost = async () => {
    await TrackService.addComment(userName, comment, '615d7871d539150fc48dc3c3');
    fetchCurrentTrack('615d7871d539150fc48dc3c3');
  };

  return (
    <div className={s.list}>
      <h2 className={s.title}>Комментарии</h2>
      <div className={s.add}>
        <h3>Оставить коментарий</h3>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={s.username}
          type="text"
          placeholder="UserName"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={s.comment}
          placeholder="Комментарий..."
        />
        <button onClick={() => addPost()} className={s.button}>
          Оставить Комментарий
        </button>
      </div>
      <div className={s.comments}>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};
