import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function handlechange(event) {
    const { name, value, type } = event.target;
    setMeme((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  }
  const [allMemeImages, setAllMemeImages] = React.useState([]);
  console.log(meme);
 React.useEffect(() => {
   fetch("https://api.imgflip.com/get_memes")
     .then((res) => res.json())
     .then((data) => setAllMemeImages(data.data.memes));
 }, []);

  function getMemeImage() {
   
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          onChange={handlechange}
          name="topText"
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          onChange={handlechange}
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}