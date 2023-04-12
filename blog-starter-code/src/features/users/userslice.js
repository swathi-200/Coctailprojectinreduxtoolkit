import { createSlice } from "@reduxjs/toolkit";
const initialState=
[
    {id:1,name:"jhas"},
    {id:2,name:"abc"},
    {id:3,name:"def"}

]
const userslice=createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})
export default userslice;
export const selectalluser=state=>state.user