import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../store/actions-creators/user';
import * as trackActionCreators from '../store/actions-creators/track';
import * as playerActionCreators from '../store/actions-creators/player';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...trackActionCreators,
      ...userActionCreators,
      ...playerActionCreators,
    },
    dispatch
  );
};
