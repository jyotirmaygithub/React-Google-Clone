import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserEntertedInput } from "../Context/SearchContext";
import Loader from "../Components/Loader";

export default function Imagedata() {
  const { userinput } = UserEntertedInput();
  const [imagedata, setimagedata] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);

  let api = "AIzaSyBwDwIJiPOAjMKn-Nae7LFIf5Ur0WFBLLE";
  let engineoid = "c7dab37e91cbc48c8";
  let rapidurl;

  console.log("this is coming from usecontext = ", userinput);

  useEffect(() => {
    // rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page}&searchType=image`
    if (userinput) {
      setloading(true);
      try {
        fetchdata();
        async function fetchdata() {
          let data = await fetch(rapidurl);
          let response = await data.json();
          console.log(response)
          setimagedata(response.items);
          setloading(false);
        }
      } catch (error) {
        console.log("unable to fetch data");
      }
    }
  }, [userinput]);

  async function fetchmoredata() {
    // rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page + 1}&searchType=image`
    setloading(true)
    try {
      let data = await fetch(rapidurl);
      let response = await data.json();
      setimagedata(imagedata.concat(response.items));
      setpage(page + 1);
      setloading(false)
    } catch (error) {
      console.log("no more data is avaliable");
    }
  }

  return (
    <>
      <div className="images-to-show">
        <InfiniteScroll
          className="universal wrapping-images"
          dataLength={imagedata.length}
          next={fetchmoredata}
          hasMore={true}
          loader={<Loader />}
          scrollThreshold={0.9}
        >
          {loading && <Loader />}
          {imagedata &&
            imagedata.map((e) => {
              let { link } = e;
              return (
                <div className="image-box">
                  <img className="image-css" src={link} alt="" />
                </div>
              );
            })}
        </InfiniteScroll>
      </div>
    </>
  );
}
