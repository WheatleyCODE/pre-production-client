import { ITrack } from '@t';

export interface TrackState {
  tracks: ITrack[];
}

export enum TrackActionTypes {
  SET_TRACKS = 'SET_TRACKS',
}

interface SetTrackAction {
  type: TrackActionTypes.SET_TRACKS;
  payload: ITrack[];
}

export type TrackAction = SetTrackAction;
