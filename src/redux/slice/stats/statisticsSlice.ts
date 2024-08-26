// redux/slice/statistics/statisticsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StatisticsModel } from "../../../types/model/dashboard.model";

interface StatisticsState {
  data: StatisticsModel | null;
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  data: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchStatisticsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStatisticsSuccess: (state, action: PayloadAction<StatisticsModel>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStatisticsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
