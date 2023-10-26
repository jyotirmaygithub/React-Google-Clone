import React from 'react'
import Spinner from "../pictures/loading.gif"

export default function Loader() {
  return (
    <div className='universal loading-add'>
      <img src={Spinner} alt="" />
    </div>
  )
}
