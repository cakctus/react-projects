import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ id, name, image, info, glass }: any) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
