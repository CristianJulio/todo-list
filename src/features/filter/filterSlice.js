import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    termToFilter: ''
  },
  reducers: {
    setTermToFilter: (state, { payload }) => {
      state.termToFilter = payload
    }
  }
})

export const selectTermToFilter = (state) => state.filter.termToFilter

export const { setTermToFilter } = filterSlice.actions
export default filterSlice.reducer
