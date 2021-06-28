import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './slices/userSlice'
import {reducer as toastrReducer} from 'react-redux-toastr'


export default configureStore({
  reducer: {
    user: userReducer,
    toastr: toastrReducer,
  },
})