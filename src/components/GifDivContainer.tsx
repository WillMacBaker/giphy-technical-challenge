// import React from 'react'
// import styled from 'styled-components'
// import GifDiv from './gifDiv'
import { useState, useEffect } from "react"
import styled from "styled-components"

interface GifDivContainerProps{
  gifCount: number,
  setGifCount: Function
  gifData?: Object[]
}

const GifParentContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  background-color: lime;
  max-width: 100%;
`

// In here is where I want to do the api call, and then handle returned data.
// Based on this, I spawn and produce multiple 'GifDivs'

export default function GifDivContainer({gifCount, gifData}: GifDivContainerProps) {
  useEffect(() => {
    printArrayCount()
  }, [gifData])

  console.log()

  const printArrayCount = () =>{
    console.log("gifArray contains: ",typeof gifData, gifData)
  }

  const produceGifs = gifData?.map((gifItem: any) => {
    <li key = {gifItem.id}>
      {gifItem.url}
    </li>
  })

  // In here, for each item in the gifData, I need to create a GifDiv, and pass data into it. The GifDiv is where each styled item will appear

  return (
    <>
    {/* Set a counter to only show the gifCount count of gifs, basically */}
    <GifParentContainer>

      <p>Number of GIFS to return: {gifCount} </p>
      <br></br>
    </GifParentContainer>
       
    </>
  )
}

 // gifArray.map(gif => {
        //     <div>GifDivContainer
        //          <img key= UNIQUE KEY>
        //      </div>
        // })