import styled from 'styled-components'

import {  useState } from 'react';
import { motion } from 'motion/react';

interface SearchbarProps {
  gifCount: number,
  setGifCount: Function,
  gifArray: any[],
  setGifData: Function,
}


const StyledButton= styled(motion.button)`
  margin-top: 1rem;
  position: relative;
  width: 250px;
  font-family: monospace;
  width: 250px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: relative;
  border-radius: 30px;
  outline: none;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;

  &:click {
    
    box-shadow: 2px 2px 0 #000, 2px 2px 0 #4a90e2;
  }
`

const StyledInput = styled.input`
  position: relative;
  padding: 1rem;
  width: 250px;
  font-family: monospace;
  width: 250px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: relative;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
`

const StyledSelect = styled.select`
  position: relative;
  padding: 1rem;
  width: 250px;
  font-family: monospace;
  width: 250px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: relative;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
`

const API_KEY = process.env.REACT_APP_GIPHY_KEY

export default function Searchbar({gifCount, setGifCount, gifArray, setGifData}: SearchbarProps) {
  const [inputGifSearch, setInputGifSearch] = useState('')



  // This function handles making request to GIPHY API, and returning a data object that is then used by the GifDivContainer
  async function makeAPIRequest()  {
    if (inputGifSearch){
      const fetchRequest = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputGifSearch}&limit=${gifCount}&offset=0&rating=g`
      // console.log(fetchRequest)
      await fetch(fetchRequest)
      .then(response => response.json())
      .then(data => {
        setGifData(data)
        // gifArray = []
        // gifArray.push(data)
        // Add catch statements
      })
    }
    else {
      alert("Please enter a search term!")
    }
  }

  const updateGifCounter = (event: any) => {
    const value = event.target.value
    // console.log("value in dropdown changed to ", value)
    setGifCount(value)
  }

  const handleInputChange = (event: any) => {
    setInputGifSearch(event.target.value)
  }
  
  const inputListener = document.getElementById('searchInput')
  inputListener?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById('inputButton')?.click();
    }
  })
  
  return (
    <>
      <div>
        <StyledInput placeholder="Search for a GIF here" type="text" id="searchInput" onChange={handleInputChange}></StyledInput>
        
        <StyledSelect defaultValue={15}  onChange={updateGifCounter}>
          <option value='5'>5</option>
          <option value='15'>15</option>
          <option value='30'>30</option>
          <option value='50'>50</option>
        </StyledSelect>
      </div>
        <div>
          <StyledButton onClick={makeAPIRequest} id="inputButton">GIF it to me!</StyledButton>
      </div>
    </>
  )
}
