import { IUser } from '@t';
import { UserState, UserAction, UserActionTypes } from '@t/user';

const initialState: UserState = {
  test: [],
  isAuth: false,
  user: {} as IUser,
  posts: [],
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_TEST: {
      return {
        ...state,
        test: [...action.payload],
      };
    }

    case UserActionTypes.SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    case UserActionTypes.SET_USER: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    }

    case UserActionTypes.ADD_POST: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }

    case UserActionTypes.SET_POSTS: {
      return {
        ...state,
        posts: [...action.payload],
      };
    }

    default:
      return {
        ...state,
      };
  }
};
