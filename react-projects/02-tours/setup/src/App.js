import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://course-api.com/react-tours-project"
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(false)
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchData}>
          refresh
        </button>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
