import React, { useState, createRef } from "react";
import Text from "../Components/Text";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  // createRef is used to create a reference to the div element which is used to save the image
  // exportComponentAsJPEG is used to save the image as a jpeg file
  const memeref = createRef();

  return (
    <div>
      <div
        style={{
          padding: "10px",
          // paddingTop: "30px",
          width: "400px",
          border: "1px solid",
        }}
        ref={memeref}
        className="meme mt-5 mb-5"
      >
        <img src={params.get("url")} width="350px" />
        {Array(count)
          .fill(0)
          .map((element) => (
            <Text />
          ))}
      </div>
      <button variant="primary" onClick={addText} style={{ margin: "10px" }}>
        Add Text
      </button>
      <button
        variant="success"
        onClick={() => {
          exportComponentAsJPEG(memeref);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditPage;
