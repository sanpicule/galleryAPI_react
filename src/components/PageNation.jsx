import React, { useState } from 'react'

const PageNation = () => {
  const [page, setPage] = useState(1)
  const nextPage = () => {
    if(page > 1) {
      setPage(prevState => prevState - 1)
    }
  }
  const prevPage = () => {
    setPage(prevState => prevState + 1)
  }
  return (
    <div style={{marginTop: 50}}>
      <button onClick={nextPage}>前へ</button>
      <button style={{marginLeft: 20}} onClick={prevPage}>次へ</button>
      <h4 style={{textAlign: 'center'}}>{page}ページ</h4>
    </div>
  )
}

export default PageNation
