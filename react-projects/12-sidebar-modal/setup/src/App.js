import React, { useState } from "react"
import Modal from "./Modal"
import Sidebar from "./Sidebar"
import Home from "./Home"
import { AppContext } from "./context"
import { AppProvider } from "./context"

function App() {
  const [sidebar, setSidebar] = useState(false)
  const [modal, setModal] = useState(false)

  const showSidebar = () => {
    setSidebar(true)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <AppContext.Provider
        value={{
          sidebar,
          modal,
          showSidebar,
          closeSidebar,
          showModal,
          closeModal,
        }}
      >
        <Home />
        <Modal close={closeModal} />
        <Sidebar />
      </AppContext.Provider>
    </>
  )
}

export default App
