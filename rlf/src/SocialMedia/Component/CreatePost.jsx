import { useContext, useRef } from "react";
import { PostList } from "../Store/PostListProvider";
const CreatePost = () => {
  const { AddPost } = useContext(PostList);
  const title = useRef();
  const desc = useRef();
  const tags = useRef();
  const reactions = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pTitle = title.current.value;
    const pDesc = desc.current.value;
    const pTags = tags.current.value;
    const pReactions = reactions.current.value;

    AddPost(pTitle, pDesc, pTags, pReactions);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3 mt-6">
          <label forName="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={title}
            className="form-control"
            id="title"
            placeholder="Post Title"
          />
        </div>
        <div className="mb-3">
          <label forName="desc" className="form-label">
            Write your Post Here
          </label>
          <textarea
            className="form-control"
            ref={desc}
            id="desc"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label forName="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tags}
            className="form-control"
            id="tags"
            placeholder="Enter Tags Seperating them with comma (,)"
          />
        </div>
        <div className="mb-3">
          <label forName="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            ref={reactions}
            className="form-control"
            id="reactions"
            placeholder="Number of Reactions"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Submit Post
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
