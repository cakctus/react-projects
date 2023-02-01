import React, { useState, useEffect } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import data from "./data"
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  const decriment = () => {
    setIndex((prev) => {
      if (index === 0) return people.length - 1
      return prev - 1
    })
  }

  const incriment = () => {
    setIndex((prev) => {
      if (prev === people.length - 1) return 0
      if (prev < people.length - 1) return prev + 1
    })
  }

  console.log(index)

  useEffect(() => {
    // if (index < 0) {
    //   setIndex(people.length - 1)
    // }

    if (index > people.length - 1) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let set = setInterval(() => {
      setIndex(index + 1)
    }, 6000)
    return () => clearInterval(set)
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = "lastSlide"
          if (personIndex === index) {
            position = "activeSlide"
          }
          // if (personIndex === index - 1) {
          //   position = "nextSlide"
          // }
          // let position = "nextSlide"
          // if (personIndex === index) {
          //   position = "lastSlide"
          // }
          // if (personIndex === index - 1) {
          //   position = "activeSlide"
          // }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={incriment}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={incriment}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
