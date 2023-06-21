import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
    name: "booking",
    initialState: {
        booking: [],
    },
    reducers: {
        savedServices: (state, action) => {
            state.booking.push({...action.payload})
        }
    }
});

export const {savedServices} = SavedSlice.actions

export default SavedSlice.reducer