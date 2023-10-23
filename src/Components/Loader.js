import React from 'react'
import Spinner from "./loading.gif"

export default function Loader() {
  return (
    <div className='universal'>
      <img src={Spinner} alt="" />
    </div>
  )
}
