import React, { useState, useContext, useEffect, createContext } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export interface AppContextInterface {
  loading?: boolean
  searchTerm?: string
  setSearchTerm?: any //React.Dispatch<React.SetStateAction<string>>
  cocktails?: any
}

export interface AppProviderInterface {
  children?: React.ReactElement | JSX.Element | React.ReactNode
}

const AppContext = createContext<AppContextInterface | null>(null)

const AppProvider = ({ children }: AppProviderInterface) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("margarita")
  const [cocktails, setCocktails] = useState([])

  const sampleAppContext = {
    loading: loading,
    searchTerm: "searchTerm",
    setSearchTerm: setSearchTerm,
    cocktails: cocktails,
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item: any) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else setCocktails([])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
