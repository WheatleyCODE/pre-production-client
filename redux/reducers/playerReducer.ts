import { PlayerState, PlayerAction, PlayerActionTypes } from '../../types/player';

const initialState: PlayerState = {
  test: [],
};
export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.SET_TEST: {
      return {
        ...state,
        test: [...action.payload],
      };
    }

    default:
      return {
        ...state,
      };
  }
};
