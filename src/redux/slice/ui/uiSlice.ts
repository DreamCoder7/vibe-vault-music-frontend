import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../../../types/props/shared.props";

const initialState: UIState = {
  modal: { type: "", isOpen: false },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.type = action.payload;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.type = "";
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
