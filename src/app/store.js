import { configureStore } from '@reduxjs/toolkit'
import activityReducer from '../features/activities/activitiySlice'

export const store = configureStore({
  reducer: {
    activity: activityReducer
  }
})