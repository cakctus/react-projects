import React, { useContext } from "react"
import { FaBars, FaStripe } from "react-icons/fa"
import { AppContext } from "../../context"
import sublinks from "../../data"

const Navbar = () => {
  const context = useContext(AppContext)

  const overHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.currentTarget
    const text = target.textContent
    const coordinate = target.getBoundingClientRect()
    const center = (coordinate.left + coordinate.right) / 2
    const bottom = coordinate.bottom - 1
    context?.openSubmenu({ center, bottom }, text)
  }

  const leaveHandler = (e): void => {
    if (!e.target.classList.contains("link-btn")) {
      context?.closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={leaveHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <FaStripe transform="scale(5)" />
          <button className="btn toggle-btn" onClick={context?.openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={overHandler}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
