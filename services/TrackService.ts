import { ITrack } from '@t';
import { AxiosResponse } from 'axios';
import $api from '@http';

export class TrackService {
  static fetchTracks(count: number, offset: number): Promise<AxiosResponse<ITrack[]>> {
    return $api.get<ITrack[]>(`/tracks?count=${count}?offset=${offset}`);
  }
}
