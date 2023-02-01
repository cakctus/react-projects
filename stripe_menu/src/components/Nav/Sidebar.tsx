import React, { useContext } from "react"
import { AppContext } from "../../context"
import { FaTimes } from "react-icons/fa"
import sublinks from "../../data"

const Sidebar = () => {
  const context = useContext(AppContext)

  return (
    <aside
      className={`${
        context?.isSiderbarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={() => context?.closeSidebar()}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, indexx) => {
                    const { label, icon, url } = link
                    return (
                      <a href={url} key={indexx}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
