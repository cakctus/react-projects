import React, { useState, useContext } from "react"

const AppContext = React.createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }
