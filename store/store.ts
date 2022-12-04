import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { toolsSlice } from './toolsSlice'
import { videoSlice } from './videoSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            [videoSlice.name]: videoSlice.reducer,
            [toolsSlice.name]: toolsSlice.reducer
        }
    })

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>

export const wrapper = createWrapper<AppStore>(makeStore)