import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    userName:''
};

const userDetailsSlice = createSlice({
    name: "detail",
    initialState,
    reducers:{
        setUserName: (state, actions) => {
            state.userName = actions.payload
        },
        
    }
});

export const {setUserName} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;