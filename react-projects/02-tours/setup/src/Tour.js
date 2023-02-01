import React, { useState } from "react"

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [string, setString] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {string ? info : `${info.slice(0, 200)}...`}
          <span
            onClick={() => setString(!string)}
            style={{ color: "red", cursor: "pointer" }}
          >
            {string ? " less " : " more "}
          </span>
        </p>

        <button
          onClick={() => {
            removeTour(id)
          }}
          className="delete-btn"
        >
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
