import React, { createContext, useContext } from "react"
import sublinks from "./data"

export interface IProvider {
  isSubmenuOpen: boolean
  isSiderbarOpen: boolean
  openSubmenu: (obj: object | null, text: string | null) => void
  closeSubmenu: () => void
  openSidebar: () => void
  closeSidebar: () => void
  coord: any
  page: any
}

export const AppContext = createContext<IProvider | null>(null)

export const useGlobalContext = () => {
  return useContext(AppContext)
}
