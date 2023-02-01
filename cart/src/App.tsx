import React, { useState, useReducer, useEffect } from "react"
import cartItems from "./data/data"
import Navbar from "./components/Navbar/Navbar"
import CartContainer from "./components/Cart/CartContainer"
import { AppContext } from "./context/context"
import reducer from "./reducer"
import { AppContextInterface } from "./context/context"

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

function App() {
  // const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id })
  }

  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" })
  }, [state.cart])

  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }

  const sampleAppContext: AppContextInterface = {
    cart: state.cart,
    total: state.total,
    amount: state.amount,
    clear: clearCart,
    removeItem: removeItem,
    increase: increase,
    decrease: decrease,
  }

  return (
    <main>
      <AppContext.Provider value={sampleAppContext}>
        <Navbar />
        <CartContainer />
      </AppContext.Provider>
    </main>
  )
}

export default App
