import { createTrackDto } from '@t/ITrack';
import { TrackService } from '@services';
import { Dispatch } from 'react';
import { ITrack } from '@t';
import { TrackAction, TrackActionTypes } from '@t/track';
import axios from 'axios';

export const setTrackAC = (tracks: ITrack[]): TrackAction => {
  return {
    type: TrackActionTypes.SET_TRACKS,
    payload: tracks,
  };
};

export const setCurrentTrackAC = (track: ITrack): TrackAction => {
  return {
    type: TrackActionTypes.SET_CURRENT_TRACKS,
    payload: track,
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

export const addTrack = (dto: createTrackDto, redirect: () => void) => {
  return async (dispatch: Dispatch<TrackAction>): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append('picture', dto.picture);
      formData.append('audio', dto.audio);
      formData.append('name', dto.name);
      formData.append('artist', dto.artist);
      formData.append('text', dto.text);
      const res = await axios.post('http://localhost:5000/tracks', formData);
      console.log(res, 'dfdfd');
      redirect();
    } catch (e) {
      console.log(e?.response?.data?.message);
      console.log(e);
    }
  };
};

export const fetchCurrentTrack = (id: string) => {
  return async (dispatch: Dispatch<TrackAction>): Promise<void> => {
    try {
      const res = await TrackService.fetchCurrentTrack(id);
      console.log(res);
      dispatch(setCurrentTrackAC(res.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};
