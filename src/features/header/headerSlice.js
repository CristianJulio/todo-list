import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isEditing: false
  },
  reducers: {
    setIsEditing: (state, { payload }) => {
      state.isEditing = payload
    }
  }
})

export const selectIsEditing = (state) => state.header.isEditing

export const { setIsEditing, setIsCreating } = headerSlice.actions
export default headerSlice.reducer
