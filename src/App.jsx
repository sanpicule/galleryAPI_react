import { useRef, useState } from 'react'
import './App.css'
import ImageGallery from './components/ ImageGallery'
import PageNation from './components/PageNation';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    //APIのURL
    const url = `https://pixabay.com/api/?key=31692101-4cf64168766fc2ff5477bc0d7&q=${ref.current.value}&image_type=photo`

    //APIを叩く
    fetch(url).then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.total);
      setFetchData(data.hits);
    })
  }
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='画像を探す' ref={ref}/>
      </form>
      <ImageGallery fetchData={fetchData}></ImageGallery>
      <PageNation></PageNation>
    </div>
  )
}

export default App
