export interface PlayerState {
  test: string[];
}

export enum PlayerActionTypes {
  SET_TEST = 'SET_TEST',
}

interface SetTestAction {
  type: PlayerActionTypes.SET_TEST;
  payload: string[];
}

export type PlayerAction = SetTestAction;
