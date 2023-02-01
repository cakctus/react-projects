import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  console.log(showInfo)

  const styles = {
    backgroundColor: showInfo ? "silver" : "#F0F8FF",
    padding: "0.5em",
    color: "black",
    borderRadius: "5px",
    a: {
      color: "black",
    },
    cursor: "pointer",
  }

  return (
    <article className="question">
      <header>
        <h4 style={styles} onClick={toggleInfo}>
          {title}
        </h4>
        <button className="btn" onClick={toggleInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : ""}
    </article>
  )
}

export default Question
