import React from "react"
import logo from "./logo.svg"
import { FaTimes } from "react-icons/fa"
import { social, links } from "./data"
import { useGlobalContext } from "./context"
const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext()
  return (
    // "sidebar show-sidebar"
    <aside className={`${sidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" width="50" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href="#">
                {icon} {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="links">
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href="#">{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
