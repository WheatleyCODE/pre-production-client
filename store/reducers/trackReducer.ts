import { TrackState, TrackAction, TrackActionTypes } from '@t/track';

const initialState: TrackState = {
  tracks: [],
};

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
  switch (action.type) {
    case TrackActionTypes.SET_TRACKS:
      return {
        ...state,
        tracks: [...action.payload],
      };

    default:
      return state;
  }
};
