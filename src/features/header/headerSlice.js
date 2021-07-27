import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isEditing: false,
    isCreating: false
  },
  reducers: {
    setIsEditing: (state, { payload }) => {
      state.isEditing = payload
    },
    setIsCreating: (state, { payload }) => {
      state.isCreating = payload
    }
  }
})

export const selectIsEditing = (state) => state.header.isEditing
export const selectIsCreating = (state) => state.header.isCreating

export const { setIsEditing, setIsCreating } = headerSlice.actions
export default headerSlice.reducer