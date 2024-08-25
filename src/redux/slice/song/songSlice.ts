// redux/slice/song/songSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongModel } from "../../../types/model/song.model";
import { CreateSongDto } from "../../../components/forms/song/dto/create-song.dto";

// Define the shape of the SongState
interface SongState {
  songs: SongModel[];
  loading: boolean;
  error: string | null;
  selectedSong?: SongModel;
}

// Define the initial state
const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
  selectedSong: undefined,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action: PayloadAction<SongModel[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    createSongRequest: (state, action: PayloadAction<CreateSongDto>) => {
      console.log(action.payload);
      state.loading = true;
      state.error = null;
    },
    createSongSuccess: (state, action: PayloadAction<SongModel>) => {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateSongRequest: (state, action: PayloadAction<CreateSongDto>) => {
      console.log(action.payload);
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<SongModel>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSongRequest: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedSong: (state, action: PayloadAction<SongModel | undefined>) => {
      state.selectedSong = action.payload;
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
  setSelectedSong,
} = songSlice.actions;

export default songSlice.reducer;
