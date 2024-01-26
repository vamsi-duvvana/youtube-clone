import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        toggleHamburger: false,
        selectedButtonIndex: 0
    },
    reducers: {
        toggleHamburger: (state, action) => {
            state.toggleHamburger = !state.toggleHamburger
        },
        changeSelectedButtonIndex: (state, action) => {
            state.selectedButtonIndex = action.payload;
        }
    }
})

export const { toggleHamburger, changeSelectedButtonIndex } = configSlice.actions;
export default configSlice.reducer;
