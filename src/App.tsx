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

export interface GIFData {
  data:       Datum[];
  meta:       Meta;
  pagination: Pagination;
}

export interface Datum {
  type:                       string;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     string;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            Date;
  trending_datetime:          string;
  images:                     Images;
  analytics_response_payload: string;
  analytics:                  Analytics;
  alt_text:                   string;
  user?:                      User;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original:    FixedWidth;
  fixed_width: FixedWidth;
}

export interface FixedWidth {
  height:    string;
  width:     string;
  size:      string;
  url:       string;
  mp4_size:  string;
  mp4:       string;
  webp_size: string;
  webp:      string;
  frames?:   string;
  hash?:     string;
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}


/* END OF PROVIDED TYPESCRIPT INTERFACE CODE*/


// Here, I want to declare contexts and things within the scope of the whole app.

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

        {/* <ApplicationHandler></ApplicationHandler> */}
        <Searchbar gifCount={gifCount} setGifCount={setGifCount} gifArray={gifArray} setGifData={setGifData}/>
        <GifDivContainer gifCount={gifCount} setGifCount={setGifCount} gifData={gifData}/>
      </div>
    </>
  );
}

