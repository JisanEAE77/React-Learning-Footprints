import PostListProvider from "./Store/PostListProvider";
import CreatePost from "./Component/CreatePost";
import Footer from "./Component/Footer";
import PostList from "./Component/PostList";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/header";
import { useState } from "react";

const SocialMedia = () => {
  const [selectedTab, setTab] = useState("Home");
  return (
    <>
      <PostListProvider setTab={setTab}>
        <div className="app-container d-flex h-100">
          <Sidebar selectedTab={selectedTab} setTab={setTab} />
          <div className="content w-100">
            <Header />
            <div className="w-75 m-auto">
              {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            </div>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default SocialMedia;
