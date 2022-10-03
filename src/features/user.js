//allows to create reducer in an easy way becomes intuative to split your logic and acess it through out your app
import { createSlice } from "@reduxjs/toolkit";

//Will contain all the info about the reducer, the actions we want to take on the state and actual name of the state

const initialStateValue = { name: "", age: 0, email: "" }

export const userSlice = createSlice({
    name: "user",
    //structure of the state will always have a value property which will contain the actual value of the state. example an object below containing age.
    initialState: {value: initialStateValue },
    reducers: {
        //state hold the info about the current and previous value of your states
        // action an oject which contains the payload and type.
        //payload an object which you can pass in info that you might wanna use when changing your state
        // type: trigger different types of actions
        login: (state, action) => {
            //grab the prev state we had above and change it to whatever we get from payload
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;