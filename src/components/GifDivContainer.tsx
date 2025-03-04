// import React from 'react'
// import styled from 'styled-components'
// import GifDiv from './gifDiv'
import { useState, useEffect } from "react"
import styled from "styled-components"



/* Following Typescript code provided by utlising https://app.quicktype.io so I don't lose mind attempting to interface entire 
   GIPHY JSON object by hand */

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

interface GifDivContainerProps{
  gifCount: number,
  setGifCount: Function
  gifData?: any[]
}



/* STYLED COMPONENTS */

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


    // console.log(...gifData)
    // // gifArray: JSON.parse(gifData)
  
  useEffect(() => {
    console.log("gifData", typeof gifData, gifData)
    console.log()
  }, [gifData])



  // In here, for each item in the gifData, I need to create a GifDiv, and pass data into it. The GifDiv is where each styled item will appear

  return (
    <>
    {/* Set a counter to only show the gifCount count of gifs, basically */}
    <GifParentContainer>

      <p>Number of GIFS to return: {gifCount} </p>
      <br></br>
      <ul>

      </ul>
    </GifParentContainer>
       
    </>
  )
}

