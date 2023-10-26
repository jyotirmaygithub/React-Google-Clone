import React from 'react'
import Logo from '../pictures/searcherlogo.png'

export default function Heading() {
  return (
    <div className='universal heading'>
      <img src={Logo} alt="" />
      <h2>Searcher</h2>
    </div>
  )
}
