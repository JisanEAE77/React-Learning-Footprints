import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/PostListProvider";

const SinglePost = ({ post }) => {
    const {DeletePost} = useContext(PostList)
  return (
    <>
      <div className="card w-100 my-4">
        <div className="card-body">
          <span onClick={() => DeletePost(post.id)} style={{cursor: "Pointer"}} title="Delete" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <AiFillDelete />
            <span class="visually-hidden">Delete this Post</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.desc}</p>
          <div className="mb-3">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge bg-primary text-white mx-1">
                {tag}
              </span>
            ))}
          </div>
          <div class="alert alert-info" role="alert">
            {post.reactions} People Reacted in this Post!
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
