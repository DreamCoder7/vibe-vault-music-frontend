// types.ts

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
}

// Action types
export interface FetchSongsRequestAction {
  type: string;
}

export interface FetchSongsSuccessAction {
  type: string;
  payload: Song[];
}

export interface FetchSongsFailureAction {
  type: string;
  payload: string;
}

export interface CreateSongRequestAction {
  type: string;
  payload: Omit<Song, "id">; // Omit 'id' for creation
}

export interface CreateSongSuccessAction {
  type: string;
  payload: Song;
}

export interface CreateSongFailureAction {
  type: string;
  payload: string;
}

export interface UpdateSongRequestAction {
  type: string;
  payload: Song;
}

export interface UpdateSongSuccessAction {
  type: string;
  payload: Song;
}

export interface UpdateSongFailureAction {
  type: string;
  payload: string;
}

export interface DeleteSongRequestAction {
  type: string;
  payload: string; // song id
}

export interface DeleteSongSuccessAction {
  type: string;
  payload: string; // song id
}

export interface DeleteSongFailureAction {
  type: string;
  payload: string;
}

// types/song.types.ts
export interface SongModel {
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
  duration: string;
  lyrics?: string;
}

export interface ApiResponse<T> {
  data: T;
}

interface StatisticsResponse {
  status: string;
  data: {
    labels: string[];
    values: number[];
  };
}

export type { StatisticsResponse };
