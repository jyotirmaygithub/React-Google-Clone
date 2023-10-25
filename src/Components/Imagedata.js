import React,{useState,useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { UserEntertedInput } from '../Context/SearchContext';
import Loader from './Loader';

export default function Imagedata() {
    const {userinput} = UserEntertedInput()
    const [imagedata ,setimagedata] = useState([])
    const [page ,setpage] = useState(1)
    const [loading, setloading] = useState(false)

    let api = "AIzaSyDEzB3GhWOtkizxTrw-usLiQdl5rlVRfP8";
  let engineoid = "459e8bc0984b24b03";
  let rapidurl;
 
  console.log("this is coming from usecontext = ", userinput);
  // console.log(check)
  useEffect(()=>{
      rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page}&searchType=image`
      if(userinput){
          try {
              fetchdata()
              async function fetchdata(){
                setloading(true)
                let data = await fetch(rapidurl)
                let response = await data.json()
                setimagedata(response.items)
                setloading(false)
              }
            
          } catch (error) {
            console.log("unable to fetch data")
          }
      }
  },[userinput])

  return (
    <>
    <div className='universal wrapping-images '>
      <InfiniteScroll 
      dataLength={imagedata.length}
      hasMore={true}
      loader={<Loader/>}
      scrollThreshold={0.9}
      >
      {loading && <Loader/>}
      {imagedata.map((e)=>{
          let {link} = e
          return(
              <div className='image-box'>
            <img className='image-css' src={link} alt="" />
           </div>
        )
    })}
    </InfiniteScroll>
    </div>
    </>
  )
}
