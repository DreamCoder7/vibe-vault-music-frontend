import { all, call, put, takeEvery } from "redux-saga/effects";
import { SongModel } from "../types/model/song.model";
import {
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
} from "./slice/song/songSlice";
import { toast } from "react-toastify";
import { apiRequest } from "../lib/apiRequest";
import {
  fetchStatisticsFailure,
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
} from "./slice/stats/statisticsSlice";
import { StatisticsModel } from "../types/model/dashboard.model";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch songs
function* fetchSongs() {
  try {
    const data: SongModel[] = yield call(
      apiRequest,
      `${BASE_URL}/songs`,
      "GET"
    );
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    yield put(fetchSongsFailure(message));
  }
}

// Create song
function* createSong(action: ReturnType<typeof createSongRequest>) {
  try {
    const data: SongModel = yield call(
      apiRequest,
      `${BASE_URL}/songs`,
      "POST",
      action.payload
    );
    yield put(createSongSuccess(data));
    toast.success("Song created successfully");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    yield put(createSongFailure(message));
    toast.error(message);
  }
}

// Update song
function* updateSong(action: ReturnType<typeof updateSongRequest>) {
  try {
    const data: SongModel = yield call(
      apiRequest,
      `${BASE_URL}/songs/${action.payload._id}`,
      "PATCH",
      action.payload
    );
    yield put(updateSongSuccess(data));
    toast.success("Song updated successfully");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    yield put(updateSongFailure(message));
    toast.error(message);
  }
}

// Delete song
function* deleteSong(action: ReturnType<typeof deleteSongRequest>) {
  try {
    const response: { _id: string } = yield call(
      apiRequest,
      `${BASE_URL}/songs/${action.payload}`,
      "DELETE"
    );
    yield put(deleteSongSuccess(response._id));
    toast.success("Song deleted successfully");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    yield put(deleteSongFailure(message));
    toast.error(message);
  }
}

// Fetch statistics
function* fetchStatistics() {
  try {
    const data: StatisticsModel = yield call(
      apiRequest,
      `${BASE_URL}/songs/stats`,
      "GET"
    );
    yield put(fetchStatisticsSuccess(data));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    yield put(fetchStatisticsFailure(message));
  }
}

// Combine sagas
function* songSagas() {
  yield all([
    takeEvery(fetchSongsRequest.type, fetchSongs),
    takeEvery(createSongRequest.type, createSong),
    takeEvery(updateSongRequest.type, updateSong),
    takeEvery(deleteSongRequest.type, deleteSong),
    takeEvery(fetchStatisticsRequest.type, fetchStatistics),
  ]);
}

export default songSagas;
