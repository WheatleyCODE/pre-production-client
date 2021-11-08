import { ITrack } from '@t';
import { PlayerAction, PlayerActionTypes } from '@t/player';

export const playAC = (): PlayerAction => {
  return {
    type: PlayerActionTypes.PLAY,
  };
};

export const pauseAC = (): PlayerAction => {
  return {
    type: PlayerActionTypes.PAUSE,
  };
};

export const setDurationAC = (duration: number): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_DURATION,
    payload: duration,
  };
};

export const setCurrentPlayTrackAC = (track: ITrack): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_ACTIVE,
    payload: track,
  };
};

export const setCurrentTimeAC = (time: number): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload: time,
  };
};

export const setVolumeAC = (volume: number): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_VOLUME,
    payload: volume,
  };
};

// export const login = (email: string, password: string) => {
//   return async (dispatch: Dispatch<PlayerAction>): Promise<void> => {
//     try {
//       const res = await AuthService.login(email, password);
//       console.log(res);
//       localStorage.setItem('token', res.data.accessToken);
//       dispatch(setAuthAc(true));
//       dispatch(setPlayerAc(res.data.Player));
//     } catch (e) {
//       console.log(e?.response?.data?.message);
//     }
//   };
// };
