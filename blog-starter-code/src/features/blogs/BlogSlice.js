import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
      id: "1",
      title: "Basic Redux-Toolkit",
      body:
        "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
      response: {
        like: 0,
        unlike: 0,
      },
    },
    {
      id: "2",
      title: "React Redux",
      body:
        "React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.",
      response: {
        like: 0,
        unlike: 0,
      },
    },
  ];
  const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{
        addBlog:{
            reducer(state,action)
            {
                state.push(action.payload)
            },
            prepare(title,body,userId)
            {
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        body,
                        userId,
                        response:{
                            like:0,
                            unlike:0
                        }
                    }
                }
            }
        },
        responseAdded(state,action)
        {
            const {blogId,response}=action.payload;
            console.log("responseeeeeeeeeeeeeee",response)
            const existingblog=state.find((blog)=>blog.id===blogId);
            if(existingblog)
            existingblog.response[response]++

        }
    }

  })
  export const {addBlog,responseAdded}=blogSlice.actions
  export const selectall=state=>state.blog
  export default blogSlice;
