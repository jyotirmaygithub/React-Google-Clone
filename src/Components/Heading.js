import React from 'react'
import Logo from './searcherlogo.png'

export default function Heading() {
  return (
    <div className='universal'>
      <img src={Logo} alt="" />
      <h2>Searcher</h2>
    </div>
  )
}
