import React from 'react'
import Spinner from "../pictures/loading.gif"

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-[40vh] w-full'>
      <img src={Spinner} alt="" />
    </div>
  )
}
