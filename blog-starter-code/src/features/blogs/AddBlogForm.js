import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { selectalluser } from "../users/userslice";
import { addBlog } from "./BlogSlice";
const initialState = {
  title: "",
  body: "",
  userId: "",
};

const AddBlogForm = () => {
  const dispatch=useDispatch();
  const users=useSelector(selectalluser);
  console.log("usersssssssssssssss",users)
  const [form, setForm] = useState(initialState);
  const { title, body, userId } = form;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUser = (e) => {
    const { value } = e.target;
    setForm({ ...form, userId: value });
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(title && body)
     dispatch(addBlog(title,body,userId))
     setForm({title:'',body:'',userId:''})
  };
const isfill=Boolean(title) && Boolean(body) && Boolean(userId);
  return (
    <section>
      <h2>Add Blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userId">User:</label>
        <select id="userId" value={userId} onChange={handleUser}>
          {users.map((user)=>(
            <option key={user.id} value={user.id}>
                      {user.name}
            </option>
          ))}
          
        </select>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={body} onChange={handleChange} />
        <button type="submit" className="btn btn-primary" disabled={!isfill}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddBlogForm;
