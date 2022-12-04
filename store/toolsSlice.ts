import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from './store'
import Monitor from 'components/UI/icons/Monitor'
import Pen from 'components/UI/icons/Pen'
import FrontEnd from 'components/UI/icons/FrontEnd'
import BackEnd from 'components/UI/icons/BackEnd'

interface ToolsState {
    toolsState: Array<any>
}

const initialState: ToolsState = {
    toolsState: [
        { id: 1, name: 'UI/UX Design', Icon: Monitor },
        { id: 2, name: 'Graphic Design', Icon: Pen },
        { id: 3, name: 'Front-End Development', Icon: FrontEnd },
        { id: 4, name: 'Back-End Development', Icon: BackEnd }
    ]
}

export const toolsSlice = createSlice({
    name: 'tools',
    initialState,

    reducers: {
        setToolsState(state, action) {
            state.toolsState = action.payload;
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

export const { setToolsState } = toolsSlice.actions

export const selectToolsState = (state: AppState) => state.tools.toolsState

export default toolsSlice.reducer