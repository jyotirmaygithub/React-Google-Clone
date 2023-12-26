import React from 'react'
import Logo from '../pictures/searcherlogo.png'

export default function Heading() {
  return (
    <div className='fixed left-7 top-5 flex space-x-1'>
      <img src={Logo} alt="" />
      <h2 className='font-bold'>Searcher</h2>
    </div>
  )
}
