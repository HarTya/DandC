import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from './store'

interface VideoState {
    videoState: boolean
}

const initialState: VideoState = {
    videoState: false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,

    reducers: {
        setVideoState(state, action) {
            state.videoState = action.payload;
        }
    },

    extraReducers: builder => {
        builder.addCase(
            HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action
                }
            }
        )
    }

})

export const { setVideoState } = videoSlice.actions

export const selectVideoState = (state: AppState) => state.video.videoState

export default videoSlice.reducer