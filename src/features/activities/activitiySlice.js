import { createSlice } from '@reduxjs/toolkit'

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: []
  },
  reducers: {
    addActivity: (state, { payload }) => {
      state.activities.push(payload)
    },
    changeActivityState: (state, { payload }) => {
      const compareId = (activity) => activity.id === payload
      const index = state.activities.findIndex(compareId)
      state.activities[index].completed = !state.activities[index].completed 
    },
    deleteActivity: (state, { payload }) => {
      state.activities = state.activities.filter(act => act.id !== payload)
    }
  }
})

export const selectActivities = (state) => state.activity.activities

export const { addActivity, changeActivityState, deleteActivity } = activitySlice.actions
export default activitySlice.reducer