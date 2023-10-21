import React,{useState} from 'react'


export default function Search() {
  const [writvalue,setwritevalue] = useState('')
  const [permanent, setpermanent] = useState('')
  function userwriting(e){
    e.preventDefault()
    console.log(e.target.value)
    setwritevalue(e.target.value);
  }
  function writesubmit(e){
    e.preventDefault()
    setpermanent(writvalue)
  }
  return (
    <div>
      <form onSubmit={writesubmit} action="">
        <input onChange={userwriting} className='input-bar' type="search" name="" id="" />
      </form>
    </div>
  )
}
