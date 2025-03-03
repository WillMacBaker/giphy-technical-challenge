import styled from 'styled-components'


interface GifDivProps {
    name: string
}


const gifDiv = styled.div`
    display: flex;
    // add media query here
`
// In here is the 'bottom level' of my components, where I want to handle onclick functionality, and also deal with 
// styling and displaying the gif itself on the site





export default function GifDiv({name}: GifDivProps) {
  return (
    <div>GifDiv has name ${name}</div>
  )
}
