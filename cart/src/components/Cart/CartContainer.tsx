import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import CartItem from "./CartItem"

const CartContainer = () => {
  const cart = useContext(AppContext)

  if (cart?.cart?.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      {/* cart header
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart?.cart?.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${cart?.total?.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={cart?.clear}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
