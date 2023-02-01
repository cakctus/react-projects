import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContextInterface } from "./Context/context"

// import pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import SingleCocktail from "./Pages/SingleCocktail"
import Error from "./Pages/Error"
// import components
import Navbar from "./Components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
