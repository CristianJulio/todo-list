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
      const array1 = [5, 12, 8, 130, 44];
      const isLargeNumber = (element) => element > 13;
      console.log(array1.findIndex(isLargeNumber));
      // expected output: 3

      const compareId = (activity) => activity.id === payload
      const index = state.activities.findIndex(compareId)
      state.activities[index].completed = !state.activities[index].completed
      
    }
  }
})

export const selectActivities = (state) => state.activity.activities

export const { addActivity, changeActivityState } = activitySlice.actions
export default activitySlice.reducer