import React, { useState, useEffect } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"

const url = "https://course-api.com/react-tabs-project"
function App() {
  const [loading, setLoadin] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  // console.log(jobs)

  // const fetchJobs = () => {
  //   const response = await fetch(url)
  //   const newJobs = await response.json()
  //   setJobs(newJobs)
  //   setLoadin(false)
  // }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        setLoadin(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }

  const { id, order, title, dates, duties, company } = jobs[value]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"} `}
                key={index}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
