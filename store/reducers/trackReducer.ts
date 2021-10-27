import { ITrack } from './../../types/ITrack';
import { TrackState, TrackAction, TrackActionTypes } from '@t/track';

const initialState: TrackState = {
  tracks: [],
  currentTrack: {
    name: '',
    artist: '',
    comments: [],
    text: '',
    listens: 0,
    picture: '',
    audio: '',
    _id: '',
  },
};

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
  switch (action.type) {
    case TrackActionTypes.SET_TRACKS:
      return {
        ...state,
        tracks: [...action.payload],
      };

    case TrackActionTypes.SET_CURRENT_TRACKS:
      return {
        ...state,
        currentTrack: { ...action.payload },
      };

    case TrackActionTypes.DELETE_TRACK: {
      const prevState = [...state.tracks];
      const newTracks = prevState.filter((track) => track._id !== action.payload);
      console.log(newTracks, 'fdsfsfsfdfdfsdfsfdsfsfdsfdsfsd');
      return {
        ...state,
        tracks: [...newTracks],
      };
    }

    default:
      return state;
  }
};
