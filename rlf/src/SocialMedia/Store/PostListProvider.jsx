import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostItems: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const postListReducer = (postList, action) => {
  let newList = postList;
  if (action.type === "Delete") {
    newList = postList.filter((post) => post.id !== action.payload.postID);
  }
  if (action.type === "Add") {
    newList = [action.payload, ...postList];
  }

  return newList;
};

const PostListProvider = ({ children, setTab }) => {
  const [PostItems, dispatchPostList] = useReducer(postListReducer, []);

  const AddPost = (title, desc, tags, reactions) => {
    let tagList = tags.split(",");
    dispatchPostList({
      type: "Add",
      payload: {
        id: Date.now(),
        title: title,
        desc: desc,
        reactions: reactions,
        tags: tagList,
      },
    });

    setTab("Home");
  };

  const DeletePost = (id) => {
    dispatchPostList({
      type: "Delete",
      payload: {
        postID: id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ PostItems: PostItems, AddPost: AddPost, DeletePost: DeletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
