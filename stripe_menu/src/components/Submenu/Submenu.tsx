import React, { useState, useRef, useEffect, useContext } from "react"
import { AppContext } from "../../context"

const Submenu = () => {
  const context = useContext(AppContext)

  const [col, setCol] = useState("col-2")

  const divElement = useRef<HTMLElement>(null!)

  useEffect(() => {
    const element = divElement?.current
    element.style.left = `${parseInt(context?.coord.center)}px`
    element.style.top = `${parseInt(context?.coord.bottom)}px`
    if (context?.page.links) {
      if (context?.page.links.length === 3) {
        setCol("col-3")
      }

      if (context?.page.links.length > 3) {
        setCol("col-4")
      }
    }
  }, [context?.coord])

  const leaveHandler = (e): void => {
    context?.closeSubmenu()
  }

  return (
    <aside
      ref={divElement}
      className={`${context?.isSubmenuOpen ? "submenu show" : "submenu"}`}
      onMouseLeave={leaveHandler}
    >
      <h4>{context?.page.page}</h4>
      <div className={`submenu-center ${col}`}>
        {context?.page.links &&
          context?.page.links.map(
            (
              link: { label: string; icon: any; url: string },
              index: number
            ) => {
              const { label, icon, url } = link
              return (
                <a key={index} href={url}>
                  {icon} {label}
                </a>
              )
            }
          )}
      </div>
    </aside>
  )
}

export default Submenu
