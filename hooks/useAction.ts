import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../redux/action-creators/user';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreators, dispatch);
};
