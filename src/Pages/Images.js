import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserEntertedInput } from "../Context/SearchContext";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import Close from "../pictures/close.png";
import ScrollTop from "../Components/scrollTopBtn"

export default function Imagedata() {
  const { userinput } = UserEntertedInput();
  const [imagedata, setimagedata] = useState([]);
  const [page, setpage] = useState(1);
  const [modal, setmodal] = useState(false);
  const [loading, setloading] = useState(false);
  const [imagehold, setimagehold] = useState("");
  const [holdertitle, setholdertitle] = useState("");
  const [holderlink, setholderlink] = useState("");

  let api = process.env.React_App_First_Search_Api
  let engineoid = process.env.React_App_First_Search_Engine
  let rapidurl;

  useEffect(() => {
    rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page}&searchType=image`;
    if (userinput) {
      setloading(true);
      try {
        fetchdata();
        async function fetchdata() {
          let data = await fetch(rapidurl);
          let response = await data.json();
          setimagedata(response.items);
          setloading(false);
        }
      } catch (error) {
        console.log("unable to fetch data");
      }
    }
  }, [userinput]);

  async function fetchmoredata() {
    rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${
      page + 11
    }&searchType=image`;
    setloading(true);
    try {
      let data = await fetch(rapidurl);
      let response = await data.json();
      setimagedata(imagedata.concat(response.items));
      setpage(page + 11);
      setloading(false);
    } catch (error) {
      console.log("no more data is avaliable");
    }
  }

  function fullview(link, title, image) {
    setmodal(true);
    setimagehold(link);
    setholdertitle(title);
    setholderlink(image.contextLink);
  }
  function closefullview() {
    setmodal(false);
  }
  return (
    <>
    <ScrollTop/>
      <div className="flex items-center justify-center">
        <div>
          <InfiniteScroll
            className={
              modal ? "universal wrapping-images2" : "universal wrapping-images"
            }
            dataLength={imagedata.length}
            next={fetchmoredata}
            hasMore={true}
            loader={<Loader />}
            scrollThreshold={0.9}
          >
            {loading && <Loader />}
            {imagedata &&
              imagedata.map((e,index) => {
                let { link, title, image } = e;
                return link ? (
                  <div className="h-[40vh] w-[23vw] m-[10px] rounded image-box" key={index}>
                    <img
                      className="h-full w-full object-cover rounded "
                      onClick={() => fullview(link, title, image)}
                      src={link}
                      alt={title}
                    />
                  </div>
                ) : (
                  " "
                );
              })}
          </InfiniteScroll>
        </div>
        {modal && (
          <div className="flex justify-centre items-center w-full another-box">
            <div className="universal inside-another-box">
              <img src={Close} style={{cursor : 'pointer'}} onClick={closefullview} alt="" />
              <Link target="_blank" to={holderlink} className="universal link link-images-add ">
                <div>
                  <img src={imagehold} alt="" />
                </div>
                <div className="m-4 pl-10">
                  <h2>{holdertitle} </h2>
                  <p>{holderlink.split(" ").splice(0, 5).join(" ")} </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
