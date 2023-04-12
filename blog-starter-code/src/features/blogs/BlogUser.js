import { selectalluser } from "../users/userslice";
import { useSelector } from "react-redux";
const BlogUser = ({userId}) => {
  const users=useSelector(selectalluser);
  const userb=users.find((user)=>user.id==userId)
  
  return (
    <span>
      by <mark style={{ fontSize: "16px", fontWeight: "bold" }}>{userb ? userb.name :"unknown"}</mark>
    </span>
  );
};
export default BlogUser;
