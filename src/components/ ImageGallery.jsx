import React from 'react'
import './ImageGallery.css'

const  ImageGallery = ({fetchData}) => {
  return (
    <div className='images-wrapper'>
        {fetchData.map((data) => (
          <div className='image' key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} />
            </a>
          </div>
        ))}
    </div>
  )
}

export default  ImageGallery