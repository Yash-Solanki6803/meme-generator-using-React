// import React from "react";
import { logo } from "../../public/images";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project 5</h4>
    </header>
  );
}
