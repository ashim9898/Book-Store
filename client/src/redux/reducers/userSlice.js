import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    userRole: '',
    firstTimeUser: true,
    isLoggedIn: false,
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
        setLoginDetails: (state,actions)=>{
            state.isLoggedIn = !state.isLoggedIn
        }
    }
});

export const {assignUserRole,setIsFirstTimeUser,setLoginDetails} = userSlice.actions;
export default userSlice.reducer;