import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'motion/react'

interface GifDivProps {
    name?: string,
    count?: number,
    gifData?: any
    imgSrc?: string
}

const GifDivElement = styled(motion.div)`
  cursor: pointer;
  max-width: 200px;
  margin: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-self: center;
  width: inherit;
  flex: 1;
`

const StyledImage = styled(motion.img)`
  width: 15rem;
  max-width: inherit;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
`

const OverlayGifElement = styled(motion.div)`
  background: rgba(0,0,0, 0.5); 
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
`

const StyledLargeGifDataDiv = styled(motion.div)`
  /* background-color: rgba(255, 255, 255, 0.96); */
  // Check this out as example
  background-image: repeating-linear-gradient(135deg, #d8f7fb,#d8f7fb 20vw,#ffffff 20vw,#ffffff 40vw,#f2ebc6 40vw,#f2ebc6 60vw,#ffffff 60vw,#ffffff 80vw,#cbf9df 80vw,#cbf9df 100vw,#ffffff 100vw,#ffffff 120vw); 
  width: 50%;
  height: auto;
  position: relative;
  top: 20vh;
  margin: auto;
`

const StyledLargeGif = styled.img`
  position: relative;
  object-fit: contain;
  max-height: 75%;
  max-width: 75%;
  height: auto;
  width: auto;
  margin-top: 1vh;
  margin-bottom: 1vh;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
`

// In here is the 'bottom level' of my components, where I want to handle onclick functionality, and also deal with 
// styling and displaying the gif itself on the site

export default function GifDiv({name, gifData, count}: GifDivProps) {
  const [showData, setShowData] = useState(false)

  const changeShowFlag = () => {
    setShowData(!showData)
  }
  
  return (
    <>
      <GifDivElement 
        onClick={()=> changeShowFlag()} 
        key={gifData?.id}
        id= {"GifCount:"+ count + " " + gifData?.id}>
        <StyledImage 
          src={gifData?.images.fixed_height.url} 
          alt={gifData?.alt_text} 
          whileHover={{scale: 1.05}}
          whileTap={{scale: 1.04}}>
        </StyledImage>
        {showData 
        ? 
        <motion.div >
            <OverlayGifElement initial={{opacity: 0}} animate={{opacity: 1}}>
              <StyledLargeGifDataDiv>
                <StyledLargeGif src={gifData?.images.original.url}
                key={"LARGE GIF: " + gifData?.id}
                id= {"LARGE GifCount:"+ count + " " + gifData?.id}></StyledLargeGif>
                <table>
                  <tr>
                    {gifData?.title?
                    <>
                    <th>Title:</th><tr>{gifData?.title || "NO TITLE :("}</tr>
                    </>
                  : null}
                  </tr>
                  <tr>
                    {gifData?.username?
                    <>
                      <th>Username:</th><tr> {gifData?.username || "NO USERNAME :("}</tr>
                    </>
                    : null
                  }
                  </tr>
                  <tr>
                    <th>Rating:</th><tr> {gifData?.rating || "NO RATING :("}</tr>
                  </tr>
                </table>
              </StyledLargeGifDataDiv>
            </OverlayGifElement>
          </motion.div>
        : null}
      </GifDivElement>
    </>
  )

}
