import React, { useContext, createContext } from "react"

export interface AppContextInterface {
  cart?: {
    id: number
    title: string
    price: number
    img: string
    amount: number
  }[]
  total?: number
  amount?: number
  clear?: () => void
  removeItem?: (id: number) => void
  increase: (id: number) => void
  decrease: (id: number) => void
}

export const AppContext = createContext<AppContextInterface | null>(null)
