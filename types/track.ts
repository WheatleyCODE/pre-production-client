import { ITrack } from '@t';

export interface TrackState {
  tracks: ITrack[];
  currentTrack: ITrack;
}

export enum TrackActionTypes {
  SET_TRACKS = 'SET_TRACKS',
  SET_CURRENT_TRACKS = 'SET_CURRENT_TRACKS',
}

interface SetTrackAction {
  type: TrackActionTypes.SET_TRACKS;
  payload: ITrack[];
}

interface SetCurrentTrackAction {
  type: TrackActionTypes.SET_CURRENT_TRACKS;
  payload: ITrack;
}

export type TrackAction = SetTrackAction | SetCurrentTrackAction;
