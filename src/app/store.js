import { configureStore } from '@reduxjs/toolkit'
import activityReducer from '../features/activities/activitiySlice'
import headerReducer from '../features/header/headerSlice'

export const store = configureStore({
  reducer: {
    activity: activityReducer,
    header: headerReducer
  }
})