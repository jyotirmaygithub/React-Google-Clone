import React,{useState} from 'react'
import {UserEntertedInput} from "../Context/SearchContext"


export default function Search() {
  const [writvalue,setwritevalue] = useState('')
  const {setuserinput} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(writvalue)
  }
  return (
    <>
    <div>
      <form onSubmit={writesubmit}>
        <input value={writvalue } placeholder='Search or type URL' onChange={(e)=>setwritevalue(e.target.value)} className='fixed left-36 top-3 pl-3 p-[7px] w-[50vw] outline-none border-none rounded-full input-bar' type="search"  />
      </form>
    </div>
    </>
  )
}
