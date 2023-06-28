import React, { useState, useEffect } from "react";
import "./Generator.css";

function Generator() {
  const [meme, setMeme] = useState({
    toptext: "",
    bottomtext: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="inp">
        <input
          type="text"
          placeholder="   Top Text"
          className="form-inp"
          name="toptext"
          value={meme.toptext}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="   Bottom Text"
          className="form-inp"
          name="bottomtext"
          value={meme.bottomtext}
          onChange={handleChange}
        />
        <button className="btn" onClick={getMemeImage}>
          Generate New Meme
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-img" alt="meme" />
        <h2 className="meme-text top">{meme.toptext}</h2>
        <h2 className="meme-text bottom">{meme.bottomtext}</h2>
      </div>
    </main>
  );
}

export default Generator;
