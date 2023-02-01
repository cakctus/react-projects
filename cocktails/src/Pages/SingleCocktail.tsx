import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Loading from "../Components/Loading"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

interface ItemInterface {
  name: any
  image: any
  info: any
  category: any
  glass: any
}

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktails] = useState<ItemInterface | null>(null)

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if (data.drinks) {
        console.log(data.drinks)
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
        } = data.drinks[0]
        const newItem: ItemInterface = {
          name,
          image,
          info,
          category,
          glass,
        }
        setCocktails(newItem)
      } else {
        setCocktails(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="section-title">no info</h2>
  }

  const { name, image, category, info, glass } = cocktail

  return (
    <section className="section-title">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title"></h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
