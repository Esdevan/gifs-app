import React from "react";
import type { Gif } from "../../mock-data/gifs.mock";

export const GifCard = (gif: Gif) => {
  return (
    <div className="gif-card">
      <img src={gif.url} alt={gif.title} />
      <h3>{gif.title}</h3>
      <p>
        {gif.width}x{gif.height} (1.5mb)
      </p>
    </div>
  );
};
