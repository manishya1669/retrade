import React from "react";
import AddProduct from "../components/feed/AddProductBtn";
import AddProductModal from "../components/feed/AddProductModal";
import Post from "../components/feed/Post";

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-3">
      <div className="grid grid-cols-2 gap-4">
        {[...Array(10)].map(() => <Post />)}
      </div>
      <AddProduct />
    </div>
  );
};

export default Feed;
