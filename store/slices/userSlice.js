import { createSlice } from '@reduxjs/toolkit'
import { buildProfileInitialState } from '../../components/ProfileFilling/profile-filling-helper'
import { loginThunk, signUpThunk, updateProfile } from '../thunks/user'

export const userSlice = createSlice({
  name: 'user',
  initialState: buildProfileInitialState(),
  reducers: {
    setUserData: (state, action) => {
     state = action.payload;
    },
  },
  extraReducers: {
    [signUpThunk.fulfilled]: (state, action) => {
      return action.payload;
    },
    [updateProfile.fulfilled]: (state, action) => {
      return action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      return {...state, ...action.payload };
    }
  }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer