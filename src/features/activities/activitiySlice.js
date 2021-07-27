import { createSlice } from '@reduxjs/toolkit'

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: []
  },
  reducers: {
    addActivity: (state, { payload }) => {
      state.activities.push(payload)
    }
  }
})

export const selectActivities = (state) => state.activity.activities

export const { addActivity } = activitySlice.actions
export default activitySlice.reducer