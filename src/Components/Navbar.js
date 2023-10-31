import React from 'react'
import Logo from './Heading'
import Search from './Search'
import Addfunc from './Addfunc'

export default function Navbar() {
  return (
    <div className='universal navbar'>
      <Logo/>
      <Search/>
      <Addfunc/>
    </div>
  )
}
