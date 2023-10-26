import React,{useState} from 'react'
import {UserEntertedInput} from "../Context/SearchContext"


export default function Search() {
  const [writvalue,setwritevalue] = useState('')
  const {userinput, setuserinput} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(writvalue)
  }
  return (
    <div className='search'>
      <form onSubmit={writesubmit}>
        <input value={writvalue} onChange={(e)=>setwritevalue(e.target.value)} className='input-bar' type="search" name="" id="" />
      </form>
    </div>
  )
}
