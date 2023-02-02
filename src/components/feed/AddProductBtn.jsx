import React, { useState } from "react";
import AddProductModal from "./AddProductModal";

const AddProduct = () => {
  const [visible, setVisible] = useState()
  return (
    <>
    <div className="z-10 fixed bottom-0 w-full">
      <div className="rounded-full text-right text-2xl m-8 cursor-pointer" onClick={() => setVisible(p => !p)}>
        <span className="border-2 rounded-full p-3">Add</span>
      </div>
    </div>
      <AddProductModal visible={visible} setVisible={setVisible}/>
    </>
  );
};

export default AddProduct;
