import React, { useRef } from "react"
import { useGlobalContext } from "../Context/context"

const SearchForm = () => {
  const context = useGlobalContext()
  const searchValue = useRef<HTMLInputElement | null>(null)

  const searchHandler = () => {
    if (searchValue.current) {
      context?.setSearchTerm(searchValue.current?.value)
    }
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchHandler}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
