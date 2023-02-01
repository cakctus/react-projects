import React from "react"
import Cocktail from "./Cocktail"
import Loading from "./Loading"
import { useGlobalContext } from "../Context/context"

const CocktailList = () => {
  const context = useGlobalContext()

  if (context?.loading) {
    return <Loading />
  }

  if (context?.cocktails.length < 1) {
    return <h2>no match cocktails on search</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>

      <div className="cocktails-center">
        {context?.cocktails.map((item: any) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
