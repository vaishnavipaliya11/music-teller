import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [musictoShow, setMusicToShow] = useState("rock");

  const musicCollection = {
    devotional: [
      { name: "shri krishna", rating: "4/5" },
      { name: "om namah shivay", rating: "3.5/5" },
      { name: "oo palan hare", rating: "3/5" }
    ],
    rock: [
      { name: "hey jude", rating: "4.8/5" },
      { name: "all long the watch tower", rating: "3.8/5" },
      { name: "memories", rating: "2.8/5" }
    ],
    instrumental: [
      { name: "wipe out", rating: "4.5/5" },
      { name: "apache", rating: "4/5" },
      { name: "rebel rouser", rating: "4.8/5" }
    ]
  };

  var musicSet = Object.keys(musicCollection);

  function changeHandler(genre) {
    setMusicToShow(genre);
  }

  return (
    <div className="App">
      <div class="container">
        <header class="header">
          <h1 id="heading-header"> music library 🎼</h1>
          <p id="para"> some recommendation for music </p>
        </header>
        <div>
          {musicSet.map((genre) => (
            <button class="btn" onClick={() => changeHandler(genre)}>
              {genre}
            </button>
          ))}
        </div>
        {musicCollection[musictoShow].map((music) => (
          <li class="list" key={music.name}>
            <div>{music.name}</div>
            <div>{music.rating}</div>
          </li>
        ))}
      </div>
    </div>
  );
}
