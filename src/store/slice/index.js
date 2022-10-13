import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const submitData = createAsyncThunk(
   'form/sendData',
   async (data, { rejectWithValue }) => {
      try {
         console.log(data)
         const response = await axios.post(
            'https://hookb.in/eK160jgYJ6UlaRPldJ1P',
            data
         )
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

const initialState = {
   message: '',
   error: '',
   loading: false,
}

const formSlice = createSlice({
   name: 'form',
   initialState: initialState,
   reducers: {},
   extraReducers: {
      [submitData.pending]: (state) => {
         state.loading = true
      },
      [submitData.fulfilled]: (state, action) => {
         state.loading = false
         state.message = action.payload
      },
      [submitData.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default formSlice
