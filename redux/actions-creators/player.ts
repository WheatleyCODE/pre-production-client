import { PlayerAction, PlayerActionTypes } from './../../types/player';

export const setTestAc = (arr: string[]): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_TEST,
    payload: arr,
  };
};
