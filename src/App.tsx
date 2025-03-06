import styled from 'styled-components'
import './App.css'
import Searchbar from './components/Searchbar';
import GifDivContainer from './components/GifDivContainer';

import { createContext, useEffect, useState } from 'react';


// Inside here, I need to place all my components, namely a gif container that loads more gifs when scrolling to bottom
// of page, the container to contain 'gif' elements that show the image, but when clicked, expand out and show more information,
// a search bar at top, and ability to l

// App should let users visit, search for gifs and see list of results
// User should expand a gif and see further info
// App can be written in vanilla html/js or using framework
// App can use vanilla styles or off-shelf framework (such as material UI or Vuetify)

// OPTIONAL FEATURES
// Can select no. of images to show
// Implement additional technologies, such as ES6, SCSS, TypeScript into project
// Website is good experience on phone AND desktop
// If user scrolls to end of page, more GIFS load
// Implement unit tests/TDD into the project
// Deploy project on web so can live demo the site, using Github or surge
// When done, provide link to Github and/or live website

/* END OF PROVIDED TYPESCRIPT INTERFACE CODE*/


// Here, I want to declare contexts and things within the scope of the whole app.

const StyledHeader = styled.h1`
  font-family: monospace;
`

export default  function App() {
  // declare state and handling hooks here
  const [gifCount, setGifCount] = useState(15);
  const [gifData, setGifData] = useState()
  const gifArray:any = []

  
  // Initialise gifCount with initial value of '1'
  // 
  
  return (
    <>
      <div className="App">
        <StyledHeader>Giphy Search Tool</StyledHeader>
        <Searchbar gifCount={gifCount} setGifCount={setGifCount} gifArray={gifArray} setGifData={setGifData}/>
        <GifDivContainer gifCount={gifCount} setGifCount={setGifCount} gifData={gifData}/>
        <p>Powered by Giphy</p>
        <p>Site developed by William Macluskie</p>
      </div>
    </>
  );
}

