import React from "react";

import "./ImageList.css";

import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    //add the id/key to the root tag of the list element
    //key makes image rendering more efficient and fast
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
