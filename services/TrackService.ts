import { createTrackDto } from '@t/ITrack';
import { ITrack } from '@t';
import { AxiosResponse } from 'axios';
import $api from '@http';
import { IComments } from '@t/ITrack';

export class TrackService {
  static fetchTracks(count: number, offset: number): Promise<AxiosResponse<ITrack[]>> {
    return $api.get<ITrack[]>(`/tracks?count=${count}?offset=${offset}`);
  }

  static fetchCurrentTrack(id: string): Promise<AxiosResponse<ITrack>> {
    return $api.get<ITrack>(`/tracks/${id}`);
  }

  static addTrack(CreateTrackDto: createTrackDto): Promise<AxiosResponse<ITrack>> {
    return $api.post<ITrack>('/tracks', CreateTrackDto);
  }

  static deleteTrack(id: string): Promise<AxiosResponse<ITrack>> {
    return $api.delete<ITrack>(`/tracks/${id}`);
  }

  static addComment(
    username: string,
    text: string,
    trackId: string
  ): Promise<AxiosResponse<IComments>> {
    return $api.post<IComments>(`/tracks/comment`, {
      trackId,
      username,
      text,
    });
  }
}
