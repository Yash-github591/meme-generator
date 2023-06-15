import React, { useState, useEffect } from "react";
import MemeCard from "../Components/Card";
import { getAllMemes } from "../api/Meme";

const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  //   console.log(data);
  return (
    <div className="row">
      {data?.map((element) => (
        <MemeCard img={element.url} title={element.name} />
      ))}
    </div>
  );
};

export default HomePage;
