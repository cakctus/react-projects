import React, { useState } from "react"
import SingleColor from "./SingleColor"

import Values from "values.js"

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#3333").all(20))

  console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(20)
      setList(colors)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
        <h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#f15025"
                className={`${error ? "error" : null}`}
              />
              <button className="btn" type="submit">
                submit
              </button>
            </div>
          </form>
        </h3>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
