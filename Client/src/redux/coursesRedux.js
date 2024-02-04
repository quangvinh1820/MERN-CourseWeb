import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "courses",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        dataStart: (state) => {
            state.loading = true;
        },
        dataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        dataFailure: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export const {
    dataStart, 
    dataSuccess, 
    dataFailure } = userSlice.actions;
    
export default userSlice.reducer;