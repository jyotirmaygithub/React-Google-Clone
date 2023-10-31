import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Components/Loader";
import { UserEntertedInput } from "../Context/SearchContext";
import { Link } from "react-router-dom";

export default function Videos() {
  const { userinput } = UserEntertedInput();
  const [videodata, setvideodata] = useState([]);
  const [loading, setloading] = useState(false);
  const [onetime , setonetime] = useState(false)
  const [page, setpage] = useState(1);

  const api_key = process.env.React_App_youtube_api;
  let apiurl;

  useEffect(() => {
    if (userinput) {
      setloading(true);
      setonetime(true)
      fetchdata();
      async function fetchdata() {
        apiurl = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${userinput}&part=snippet&type=video&page=${page}`;
        let data = await fetch(apiurl);
        let response = await data.json();
        setloading(false);
        setonetime(false)
        setvideodata(response.items);
      }
    }
  }, [userinput]);

  async function fetchdata() {
    apiurl = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${userinput}&part=snippet&type=video&page=${page + 101}`;
    setloading(true);
    try {
      let data = await fetch(apiurl);
      let response = await data.json();
      setvideodata(videodata.concat(response.items));
      setpage(page + 101);
      setloading(false);
    } catch (error) {
      console.log("Dont have further data to fetch");
    }
  }
  return (
    <>
    {onetime && <Loader/>}
    {onetime === false && <div className="videos">
      <InfiniteScroll
        dataLength={videodata.length}
        next={fetchdata}
        hasMore={true}
        loader={<Loader />}
        scrollThreshold={0.9}
        >
        {loading && <Loader />}
        {videodata.map((e,index) => {
          let { snippet,id } = e;
          return (
            <div className=" videos-box">
              {id && id.videoId ? <Link key={index} target="_blank" className="link universal videos-box" to={`https://www.youtube.com/watch?v=${id.videoId}`} >
              <div>
               {snippet && snippet.title ?<h3>{snippet.title}</h3> : ' '}
                {snippet && snippet.description ? <p>{snippet.description}</p> : ' '}
              </div>
              <div className="video-image-box">
                {snippet && snippet.thumbnails && snippet.thumbnails.high && snippet.thumbnails.high.url ? <img src={snippet.thumbnails.high.url} alt="" /> : ' '}
              </div>
            </Link> : ' '}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>}
   </>
  );
}
