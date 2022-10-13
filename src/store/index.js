import { configureStore } from '@reduxjs/toolkit'

import formSlice from './slice'

export const store = configureStore({
   reducer: {
      form: formSlice.reducer,
   },
})

export default store
