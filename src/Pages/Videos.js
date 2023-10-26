import React from 'react'
import { UserEntertedInput } from '../Context/SearchContext'

export default function Videos() {
    const {userinput} = UserEntertedInput()
  return (
    <div className='videos'>
        <h4>{userinput}</h4>
      <h4>here videos will be </h4>
    </div>
  )
}
