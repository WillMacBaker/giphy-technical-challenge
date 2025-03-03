// import React from 'react'
// import styled from 'styled-components'
// import GifDiv from './gifDiv'
import { useState } from "react"

interface GifDivContainerProps{
    numberOfGifs?: number,
    arrayOfGifs?: Object[]
}

// In here is where I want to do the api call, and then handle returned data.
// Based on this, I spawn and produce multiple 'GifDivs'


let gifArray: {id: number, name: string}[] = [

];



export default function GifDivContainer({arrayOfGifs, numberOfGifs}: GifDivContainerProps) {
    let [gifShowCount, setGifShowCount] = useState(0)
    const handleClick = () => {
        setGifShowCount(gifShowCount + 1)
    }



  return (
    <>
        <button onClick={handleClick}>

        </button>
       
        <p>{gifShowCount}</p>
    </>
  )
}

 // gifArray.map(gif => {
        //     <div>GifDivContainer
        //          <img key= UNIQUE KEY>
        //      </div>
        // })