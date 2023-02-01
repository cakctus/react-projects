import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { links, social } from "./data"
import logo from "./logo.svg"

const Navbar = () => {
  const [showContainer, setShowContainer] = useState(false)
  const linkContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    const height = linkRef.current.getBoundingClientRect().height
    if (showContainer) {
      linkContainerRef.current.style.height = `${height}px`
    } else {
      linkContainerRef.current.style.height = 0
    }
  }, [showContainer])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" width="50" />
          <button
            className="nav-toggle"
            onClick={() => setShowContainer(!showContainer)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            !showContainer
              ? "links-container"
              : "links-container show-container"
          }
          ref={linkContainerRef}
        >
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
