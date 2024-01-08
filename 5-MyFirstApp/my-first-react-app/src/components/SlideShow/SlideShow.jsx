import React, { useState } from 'react'

const Slideshow = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 4 ? prevPage + 1 : 1))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 4))
  }

  return (
    <div>
      <div>Page {currentPage}</div>
      <div>
        <button onClick={prevPage}>Back</button>
        <button onClick={nextPage}>Forward</button>
      </div>
    </div>
  )
}

export default Slideshow
