import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../store/actions-creators/user';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreators, dispatch);
};
