import React,{useState,useEffect}from 'react'
import { UserEntertedInput } from '../Context/SearchContext'

export default function News() {
    const {userinput} = UserEntertedInput()
    const [dataarray, setdataarray] = useState([])

    let apikey = 'a156523b095d46e4b5154363280ba4ba'
    let api;

    useEffect(()=>{
        api = `https://newsapi.org/v2/everything?apiKey=${apikey}&q=${userinput}&page=1`
        fetchdata()
        async function fetchdata(){
            try {
                let data = await fetch(api)
                let response = await data.json()
                console.log(response.articles)
                setdataarray(response.articles)
            } catch (error) {
                console.log("unable to fetch data")
            }
        }
    },[userinput])
  return (
    <div className='news'>
      <h3>there will be news here in this section of the page</h3>
    </div>
  )
}
