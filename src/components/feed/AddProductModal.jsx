import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const AddProductModal = ({ visible, setVisible }) => {
  //   product imgs
  const [imgs, setImgs] = useState([]);

  // products info
  const [pd, setPd] = useState({
    title: "",
    productdescription: "",
    city: "",
    imgs: imgs
  });

  const handleChangeImg = e => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map(file =>
      URL.createObjectURL(file)
    );
    setImgs(p => p.concat(imagesArray));
    console.log(imgs);
  };

  const handleChange = e => {
    console.log(e.target.value);
    setPd(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleProductAddition = e => {
    e.preventDefault();
    setPd(p => ({ ...p, imgs: imgs }));
  };
  if (!visible) return;
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form className="bg-base-300 w-1/2 p-8 py-10 rounded-lg relative">
        <span
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setVisible(p => !p)}
        >
          <MdCancel size={40} />
        </span>
        <div className="grid grid-cols-2 gap-4">
          <label className="text-xl">product name: </label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            name="title"
            onChange={handleChange}
          />
          <label className="text-xl">product Description: </label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            name="productdescription"
            onChange={handleChange}
          />
          <label className="text-xl">city: </label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            name="city"
            onChange={handleChange}
          />
          <label className="text-xl">images: </label>
          <input
            type="file"
            multiple
            onChange={handleChangeImg}
            accept="image/png, image/jpeg, image/webp"
          />
          <div className="carousel w-full">
            {imgs
              ? imgs.map(img =>
                  <div className="carousel-item  w-1/3">
                    <img
                      src={img}
                      height="50"
                      className="cursor-pointer"
                      onClick={clickedimg =>
                        setSelectedImages(p => p.filter(e => e !== clickedimg))}
                    />
                  </div>
                )
              : "no img to preview"}
          </div>
        </div>
        <button className="btn flex-end" onClick={handleProductAddition}>
          add
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
