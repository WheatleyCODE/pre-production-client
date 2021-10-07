export interface IComments {
  username: string;
  text: string;
  _id: string;
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
