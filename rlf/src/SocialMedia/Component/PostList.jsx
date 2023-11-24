import { useContext } from "react";
import SinglePost from "./SinglePost";
import { PostList as PL } from "../Store/PostListProvider";

const PostList = () => {
    const {PostItems} = useContext(PL)
  return(
    <>
    {PostItems.length > 0 ? PostItems.map((post) => (<SinglePost key={post.id} post={post}/>)) : <h2 className="text-danger text-center mt-4">There is no post to show!</h2>}
    
    </>
  );
};

export default PostList;
