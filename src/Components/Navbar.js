import React from 'react'
import Logo from './Heading'
import Search from './Search'
import Addfunc from './Addfunc'
import Suggestions from './Suggestions'

export default function Navbar() {
  return (
    <>
    <div className='flex justify-evenly items-center w-full bg-white'>
      <Logo/>
      <Search/>
      {/* <Suggestions/> */}
      <Addfunc/>
    </div>
    </>
  )
}
