import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            state[action.payload[0]] = action.payload[1];
        }
    }
})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;