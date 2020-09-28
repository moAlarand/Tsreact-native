import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { rooteReducer, RooteStore } from './rooteReducer';

const rootStore = configureStore({
  reducer: rooteReducer
})

export type AppDispatch = typeof rootStore.dispatch
export type AppThunk = ThunkAction<void, RooteStore, unknown, Action<string>>

export default rootStore