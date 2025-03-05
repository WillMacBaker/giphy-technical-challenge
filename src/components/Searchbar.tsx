import styled from 'styled-components'

import { useEffect, useState } from 'react';

interface SearchbarProps {
  gifCount: number,
  setGifCount: Function,
  gifArray: any[],
  setGifData: Function,
}

const API_KEY = process.env.REACT_APP_GIPHY_KEY

export default function Searchbar({gifCount, setGifCount, gifArray, setGifData}: SearchbarProps) {
  // useEffect here handles calling the makeAPIRequest function whenever any defined function changes o



  // This function handles making request to GIPHY API, and returning a data object that is then used by the GifDivContainer
  async function makeAPIRequest()  {
    const fetchRequest = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${gifCount}&offset=0&rating=g&bundle=clips_grid_picker`
    await fetch(fetchRequest)
    .then(response => response.json())
    .then(data => {
      setGifData(data)
      // gifArray = []
      // gifArray.push(data)
      // Add catch statements
    })
   
  }

  const updateGifCounter = (event: any) => {
    const value = event.target.value
    console.log("value in dropdown changed to ", value)
    setGifCount(value)
  }


  

  return (
    <>
      <div>
        <input placeholder="Search for a GIF here">
        
        </input>
        
        <select defaultValue={15}  onChange={updateGifCounter}>
          <option value='5'>5</option>
          <option value='15'>15</option>
          <option value='30'>30</option>
          <option value='50'>50</option>
        </select>

        <button onClick={makeAPIRequest}>GIF it to me!</button>
      </div>
    </>
  )
}
