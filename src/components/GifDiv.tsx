import { useEffect } from 'react'
import styled from 'styled-components'


interface GifDivProps {
    name?: string,
    gifData?: any
}

const gifDiv = styled.div`
    display: flex;
    // add media query here
`
// In here is the 'bottom level' of my components, where I want to handle onclick functionality, and also deal with 
// styling and displaying the gif itself on the site

export default function GifDiv({name, gifData}: GifDivProps) {
  
  useEffect(() => {
    // Add if statement to hide first console logs, on load, you won't have any data returned
     console.log("gifData", typeof gifData, gifData)
     console.log(gifData?.data[0])
  }, [gifData])

{/* <div>GifDiv has name ${name}</div>
      <img src={gifData?.data[0].images.fixed_width.url}></img>
      <p>{gifData?.data[0].title}</p> */}
return (
  <p>hELLO</p>
  // NEED TO FIGURE OUT PROPER HANDLING OF HOW TO DO INITIAL LOADUP OF DATA ON-LOAD
    // gifData?.map((item:any) => {
    //   return (
    //     <>
    //       <img src={item.images.fixed_width.url}></img>
    //       <p>{gifData.data[0].title}</p>
    //     </>
    //   )
    // })
)}
