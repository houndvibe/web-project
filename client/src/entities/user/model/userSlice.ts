import { createSlice } from "@reduxjs/toolkit";

export interface UserSlice {
  authorized: boolean;
}

const initialState: UserSlice = {
  authorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAutorized(state) {
      state.authorized = true;
    },
  },
});

export const { setAutorized } = userSlice.actions;
export default userSlice.reducer;
