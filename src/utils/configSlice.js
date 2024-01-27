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
        },
        closeMenu: (state, action) => {
            state.toggleHamburger = true
        }
    }
})

export const { toggleHamburger, changeSelectedButtonIndex, closeMenu } = configSlice.actions;
export default configSlice.reducer;
