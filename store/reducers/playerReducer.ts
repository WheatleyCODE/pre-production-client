import { IUser } from '@t';
import { PlayerState, PlayerAction, PlayerActionTypes } from '@t/player';

const initialState: PlayerState = {
  test: [],
  isAuth: false,
  user: {} as IUser,
  posts: [],
};

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.SET_TEST: {
      return {
        ...state,
        test: [...action.payload],
      };
    }

    case PlayerActionTypes.SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    case PlayerActionTypes.SET_USER: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    }

    case PlayerActionTypes.SET_POSTS: {
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
