import { createAsyncThunk } from '@reduxjs/toolkit';
import {login, signUp } from '../../services/userService';

export const signUpThunk = createAsyncThunk(
  'user/signUp', 
  async (userData, { rejectWithValue }) => {
    const [user, error] = await signUp(userData)
    if(error) rejectWithValue(error);
    return user;
  }
)

export const updateProfile = createAsyncThunk(
  'user/updateProfile', 
  async (userData, { rejectWithValue }) => {
    const [user, error] = await updateProfile(userData)
    if(error) rejectWithValue(error);
    return user;
  }
)

export const loginThunk = createAsyncThunk(
  'user/login', 
  async (userData, { rejectWithValue }) => {
    const [user, error] = await login(userData)
    if(error) rejectWithValue(error);
    return user;
  }
)