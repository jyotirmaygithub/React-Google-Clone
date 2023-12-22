import React,{useState} from 'react'
import Suggestions from './Suggestions'
import {UserEntertedInput} from "../Context/SearchContext"


export default function Search() {
  const [writvalue,setwritevalue] = useState('')
  const {userinput, setuserinput} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(writvalue)
  }
  return (
    <>
    <div className='universal2'>
    <div className='search'>
      <form onSubmit={writesubmit}>
        <input value={writvalue } placeholder='Search or type URL' onChange={(e)=>setwritevalue(e.target.value)} className='input-bar' type="search" name="" id="" />
      </form>
    </div>
      {/* <Suggestions suggest={writvalue}/>   */}
    </div>
    </>
  )
}
