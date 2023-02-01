import React, { useState } from "react"
import Navbar from "./components/Nav/Navbar"
import Hero from "./components/Hero/Hero"
import Sidebar from "./components/Nav/Sidebar"
import Submenu from "./components/Submenu/Submenu"
import { AppContext, IProvider } from "./context"
import sublinks from "./data"
import SubLinks from "./data"

function App() {
  const [isSiderbarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false)
  const [coord, setCoord] = useState<object>({})
  const [page, setPage] = useState<SubLinks | null>([])

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (coord: object, text: string | null) => {
    setIsSubmenuOpen(true)
    setCoord(coord)
    const page = sublinks.find((item) => item.page === text)
    setPage(page)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <>
      <AppContext.Provider
        value={{
          isSiderbarOpen,
          isSubmenuOpen,
          openSubmenu,
          closeSubmenu,
          openSidebar,
          closeSidebar,
          coord,
          page,
        }}
      >
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppContext.Provider>
    </>
  )
}

export default App
