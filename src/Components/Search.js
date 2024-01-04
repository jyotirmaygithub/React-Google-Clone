import React from 'react'
import {UserEntertedInput} from "../Context/SearchContext"


export default function Search() {
  const {userinput,setuserinput,searchTerm ,setsearchTerm,setdisplay} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(searchTerm)
    setdisplay(false)
  }
  function handleInputChange(e){
    setsearchTerm(e.target.value);
    setdisplay(true);
  }
  return (
    <>
    <div>
      <form onSubmit={writesubmit}>
        <input value={searchTerm} placeholder='Search or type URL' onChange={handleInputChange} className='fixed left-36 top-3 pl-3 p-[7px] w-[50vw] outline-none border-none rounded input-bar' type="search"  />
      </form>
    </div>
    </>
  )
}
