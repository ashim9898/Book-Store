import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    userRole: '',
    firstTimeUser: true,
    isLoggedIn: true,
    token:'',
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        assignUserRole: (state, actions) => {
            state.userRole = actions.payload
            
        },
        setIsFirstTimeUser: (state, actions) => {
            state.firstTimeUser = false
            
        },
    }
});

export const {assignUserRole,setIsFirstTimeUser} = userSlice.actions;
export default userSlice.reducer;