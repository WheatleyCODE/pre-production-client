import { TrackService } from '@services';
import { Dispatch } from 'react';
import { ITrack } from '@t';
import { TrackAction, TrackActionTypes } from '@t/track';

export const setTrackAC = (tracks: ITrack[]): TrackAction => {
  return {
    type: TrackActionTypes.SET_TRACKS,
    payload: tracks,
  };
};

export const fetchTracks = (count: number, offset: number) => {
  return async (dispatch: Dispatch<TrackAction>): Promise<void> => {
    try {
      const res = await TrackService.fetchTracks(count, offset);
      console.log(res);
      dispatch(setTrackAC(res.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};
