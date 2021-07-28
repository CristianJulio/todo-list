import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { fetchCatFacts } from './catsApi'
import { v4 as uuidv4 } from 'uuid'

export const setActivitiesWithCatFacts = createAsyncThunk(
  'activities/fetchCatFacts',
  async (amount) => {
    const response = await fetchCatFacts(amount)
    return response.data
  }
)

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: [],
    filteredActivities: [],
    status: 'idle'
  },
  reducers: {
    addActivity: (state, { payload }) => {
      state.activities.push(payload)
      toast('Activity added')
    },
    changeActivityState: (state, { payload }) => {
      const compareId = (activity) => activity.id === payload
      const index = state.activities.findIndex(compareId)
      state.activities[index].completed = !state.activities[index].completed
      toast('Activity state changed')
    },
    deleteActivity: (state, { payload }) => {
      state.activities = state.activities.filter((act) => act.id !== payload)
      toast('Activity deleted')
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

      toast('Activity updated')
    },
    filterActivities: (state, { payload }) => {
      if (payload) {
        const filterd = state.activities.filter((act) =>
          act.desc.toLowerCase().includes(payload.toLowerCase())
        )
        state.filteredActivities = [...filterd]
      } else {
        state.filteredActivities = []
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setActivitiesWithCatFacts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(setActivitiesWithCatFacts.fulfilled, (state, { payload }) => {
        state.status = 'idle'
        const newActivities = payload.map((fact, index) => ({
          id: uuidv4(),
          completed: false,
          title: `Activity ${index + 1}`,
          desc: fact.fact
        }))
        state.activities = [...state.activities, ...newActivities]
        toast('Random activities added')
      })
  }
})

export const selectActivities = (state) => state.activity.activities
export const selectfilteredActivities = (state) => state.activity.filteredActivities

export const {
  addActivity,
  changeActivityState,
  deleteActivity,
  updateActivity,
  filterActivities
} = activitySlice.actions
export default activitySlice.reducer
