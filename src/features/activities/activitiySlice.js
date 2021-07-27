import { createSlice } from '@reduxjs/toolkit'

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: [],
    filteredActivities: []
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
    },
    updateActivity: (state, { payload }) => {
      const { editValue, id } = payload
      
      const compareId = (activity) => activity.id === id
      const index = state.activities.findIndex(compareId)
      const oldObj = state.activities[index]
      state.activities[index] = {
        ...oldObj,
        desc: editValue
      }
    },
    filterActivities: (state, { payload }) => {
      if(payload) {
        const filterd = state.activities.filter(act => act.desc.includes(payload))
        state.filteredActivities = [...filterd]
      } else {
        state.filteredActivities = []
      }
    }
  }
})

export const selectActivities = (state) => state.activity.activities
export const selectfilteredActivities = (state) => state.activity.filteredActivities

export const {
  addActivity,
  changeActivityState,
  deleteActivity,
  updateActivity,
  filterActivities,
} = activitySlice.actions;
export default activitySlice.reducer