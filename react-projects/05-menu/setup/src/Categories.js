import React from "react"

const Categories = ({ filterItems, category }) => {
  return (
    <div className="btn-container">
      {category.map((item, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
