import { createSlice } from '@reduxjs/toolkit';

const cardPageSlice = createSlice({
    name: 'cardPage',
    initialState: {
        cardPage: {}
    },
    reducers: {
        openProductPage(state, action) {
            state.cardPage = (action.payload)
        }
    }
})

export const { openProductPage } = cardPageSlice.actions

export default cardPageSlice.reducer