export interface IComments {
  username: string;
  text: string;
  _id: string;
}

export interface createTrackDto {
  name: string;
  artist: string;
  text: string;
  picture: any;
  audio: any;
}
export interface ITrack {
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  _id: string;
  comments: IComments[];
}
