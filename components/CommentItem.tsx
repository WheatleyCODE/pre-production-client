import { FC } from 'react';
import s from '@s.components/CommentItem.module.scss';
import { IComments } from '@t/ITrack';

export interface ICommentItemProps {
  comment: IComments;
}
export const CommentItem: FC<ICommentItemProps> = ({ comment }) => {
  return (
    <div className={s.comment}>
      <div className={s.username}>{comment.username}</div>
      <hr className={s.line} />
      <div className={s.text}>
        <pre>{comment.text}</pre>
      </div>
    </div>
  );
};
