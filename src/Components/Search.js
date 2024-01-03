import React,{useState} from 'react'
import {UserEntertedInput} from "../Context/SearchContext"


export default function Search() {
  const {setuserinput,searchTerm ,setsearchTerm} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(searchTerm)
  }
  return (
    <>
    <div>
      <form onSubmit={writesubmit}>
        <input placeholder='Search or type URL' onChange={(e)=>setsearchTerm(e.target.value)} className='fixed left-36 top-3 pl-3 p-[7px] w-[50vw] outline-none border-none  input-bar' type="search"  />
      </form>
    </div>
    </>
  )
}
