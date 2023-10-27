import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Components/Loader";
import { UserEntertedInput } from "../Context/SearchContext";
import { Link } from "react-router-dom";

export default function Videos() {
  const { userinput } = UserEntertedInput();
  const [videodata, setvideodata] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);

  const api_key = process.env.React_App_youtube_api;
  let apiurl;

  useEffect(() => {
    if (userinput) {
      setloading(true);
      fetchdata();
      async function fetchdata() {
        apiurl = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${userinput}&part=snippet&type=video&page=${page}`;
        let data = await fetch(apiurl);
        let response = await data.json();
        setloading(false);
        setvideodata(response.items);
      }
    }
  }, [userinput]);

  async function fetchdata() {
    apiurl = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${userinput}&part=snippet&type=video&page=${page + 1}`;
    setloading(true);
    try {
      console.log("is it working or not ");
      let data = await fetch(apiurl);
      let response = await data.json();
      setvideodata(videodata.concat(response.items));
      setpage(page + 1);
      setloading(false);
    } catch (error) {
      console.log("Dont have further data to fetch");
    }
  }
  return (
    <div className="videos">
      <InfiniteScroll
        dataLength={videodata.length}
        next={fetchdata}
        hasMore={true}
        loader={<Loader />}
        scrollThreshold={0.9}
      >
        {loading && <Loader />}
        {videodata.map((e) => {
          let { snippet,id } = e;
          return (
            <Link target="_blank" className="link" to={`https://www.youtube.com/watch?v=${id.videoId}`} >
            <div className="universal videos-box">
              <div>
                <h3>{snippet.title}</h3>
                <p>{snippet.description}</p>
              </div>
              <div className="video-image-box">
                <img src={snippet.thumbnails.high.url} alt="" />
              </div>
            </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
