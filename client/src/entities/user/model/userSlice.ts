import { createSlice } from "@reduxjs/toolkit";

export interface UserSlice {
  authorized: boolean;
}

const initialState: UserSlice = {
  authorized: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
