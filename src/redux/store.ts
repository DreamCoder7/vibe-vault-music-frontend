import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { apiSlice } from "./api/apiSlice";

import uiReducer from "./slice/ui/uiSlice";
import songReducer from "./slice/song/songSlice";
import authReducer from "./slice/auth/authSlice";
import statisticsReducer from "./slice/stats/statisticsSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    ui: uiReducer,
    songs: songReducer,
    auth: authReducer,
    stats: statisticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, apiSlice.middleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Define types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
