import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Searchbar from './components/Searchbar';
import GifDivContainer from './components/GifDivContainer';

const RedText = styled.p`
  color: red;
`


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



// Here, I want to import the Searchbar and the GifDivContainer, which is the parent that contains the gif divs (just the gifs themselves)

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <br></br>Hi! This template works! 
        </p>
        <RedText>This is a test red text element</RedText>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Searchbar />
      <GifDivContainer />

    </div>
  );
}

export default App;
