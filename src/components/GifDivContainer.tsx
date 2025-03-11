// import React from 'react'
// import styled from 'styled-components'
// import GifDiv from './gifDiv'
import { useState, useEffect } from "react"
import styled from "styled-components"
import GifDiv from "./GifDiv";
import { motion } from 'motion/react'

interface GifDivContainerProps{
  gifCount: number,
  setGifCount: Function
  gifData?: any
}

/* STYLED COMPONENTS */
const GifParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // Make sure that GifDiv is rendered as child/wrapped in this container element
  padding-top: 1rem;
  justify-self: center;
  justify-content: center;
  max-width: 95%;
  align-items: center;
`

// In here is where I want to do the api call, and then handle returned data.
// Based on this, I spawn and produce multiple 'GifDivs'

export default function GifDivContainer({gifCount, gifData}: GifDivContainerProps) {

  useEffect(() => {
    // Add if statement to hide first console logs, on load, you won't have any data returned
    if (gifData){
      // console.log("gifData", gifData)
      // console.log(gifData?.data)
      
    } 
  }, [gifData])
  // In here, for each item in the gifData, I need to create a GifDiv, and pass data into it. The GifDiv is where each styled item will appear

const gifDataStrippedDown = gifData?.data

  //gifData.data.map((gif: any, index: any) => { USE THIS
  return (
    <>
    {/* Set a counter to only show the gifCount count of gifs, basically */}
    <GifParentContainer>
      {
        gifDataStrippedDown?.map((gifItem?:any, index?: number) => (
         <GifDiv gifData={gifItem} count={index} key={index}/>
      ))}
    </GifParentContainer>
       
    </>
  )
}

 // NEED TO FIGURE OUT PROPER HANDLING OF HOW TO DO INITIAL LOADUP OF DATA ON-LOAD
      // gifData?.map((item:any) => {
      //   return (
      //     <>
      //       <img src={item.images.fixed_width.url}></img>
      //       <p>{gifData.data[0].title}</p>
      //     </>
      //   )
      // })