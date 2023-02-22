import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    userRole: ''
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        assignUserRole: (state, actions) => {
            state.userRole = actions.payload
            
        },
    }
});

export const {assignUserRole} = userSlice.actions;
export default userSlice.reducer;