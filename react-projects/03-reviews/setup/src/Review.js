import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNum = (num) => {
    if (num > people.length - 1) return people.length - 1
    if (num < 0) return 0
    return num
  }

  const nextPerson = () => {
    setIndex((prevIndex) => {
      // if (index < people.length - 1) {
      //   return prevIndex + 1
      // }
      // return people.length - 1
      let i = prevIndex + 1
      return checkNum(i)
    })
  }

  const prevPerson = () => {
    setIndex((prevIndex) => {
      // if (index > 0) {
      //   return prevIndex - 1
      // }
      // return 0
      let i = prevIndex - 1
      return checkNum(i)
    })
  }

  function randomPerson() {
    let id = Math.floor(Math.random() * people.length)

    setIndex(() => {
      let i = id
      return checkNum(i)
    })
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="next-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="prev-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <div>
        <button className="random-btn" onClick={randomPerson}>
          surprice me
        </button>
      </div>
    </article>
  )
}

export default Review
