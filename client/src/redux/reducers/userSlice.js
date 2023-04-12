import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    userRole: '',
    firstTimeUser: true,
    isLoggedIn: false,
    token:'',
    id:''
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
            if(actions.payload){
            const {token,id} = actions.payload
            state.token = token
            state.id = id
            }
            state.isLoggedIn = !state.isLoggedIn
           
        }
    }
});

export const {assignUserRole,setIsFirstTimeUser,setLoginDetails} = userSlice.actions;
export default userSlice.reducer;