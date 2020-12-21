import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "love",
  "🎁": "Wrapped Gift",
  "🌹": "Rose",
  "😒": "Unamused Face",
  "😑": "Annoyance",
  "✔": "Check mark",
  "🍇": "Grapes",
  "🍉": "Watermelon"
};
var emojiWeKnow = Object.keys(emojiDictionary);
var color = "lightblue";
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Curenty we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div
      style={{ backgroundColor: color, padding: "1.5rem 1rem", margin: "2rem" }}
      className="App"
    >
      <h1>
        <span style={{ color: "black" }}>
          Wanna know What emoji's means? Go ahead and check!
        </span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emoji's we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
