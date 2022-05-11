import React, { useState } from "react";

function DocuCards({ docInfo }
) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <img src={docInfo.image} alt={docInfo.comment} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{docInfo.title}</strong>
        <p>Rating: {docInfo.rating}</p>
        <p>Where to watch: {docInfo.where}</p>
        <p>About: {docInfo.comment}</p>
      </div>
    </li>
  );
}

export default DocuCards;