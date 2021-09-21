import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [musictoShow, setMusicToShow] = useState("rock");

  const musicCollection = {
    devotional: [
      { name: "shri krishna", description :"this is an krishna song",rating: "4/5" },
      { name: "om namah shivay", description:"this is an lord shiva song", rating: "3.5/5" },
      { name: "oo palan hare", description:"this is an devotional song", rating: "3/5" }
    ],
    rock: [
      { name: "hey jude", description:"this song is sung by artist the beatles releasd in 1968", rating: "4.8/5" },
      { name: "all long the watch tower", description:"this song is sung by artist Jimmi Hendrix releasd in 1968", rating: "3.8/5" },
      { name: "memories",  description:"this song is sung by artist the Maroon5 releasd in 2019",rating: "2.8/5" }
    ],
    instrumental: [
      { name: "wipe out",description:"this song is sung by artist the Surfaries releasd in 1988", rating: "4.5/5" },
      { name: "apache",description:"this song is sung by artist the Shadows,Cliff Richard  releasd in 1960", rating: "4/5" },
      { name: "rebel rouser",description:"this song is sung by artist the Dunae Eddy releasd in 2011", rating: "4.8/5" }
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
            <div>{music.description}</div>
            <div>{music.rating}</div>
            
          </li>
        ))}
      </div>
    </div>
  );
}
