import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers: {
        pushMessages: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
})

export const { pushMessages } = chatSlice.actions;
export default chatSlice.reducer;
