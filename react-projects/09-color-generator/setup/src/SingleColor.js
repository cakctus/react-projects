import React, { useState, useEffect } from "react"
import rgbToHex from "./utils"

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(",")
  const hex = rgbToHex(...rgb)

  const clickHandle = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(t)
  }, [alert])

  return (
    <article
      className={`color ${index > 4 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={clickHandle}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied</p>}
    </article>
  )
}

export default SingleColor
