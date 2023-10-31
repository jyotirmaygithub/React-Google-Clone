import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserEntertedInput } from "../Context/SearchContext";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import Close from "../pictures/close.png";

export default function Imagedata() {
  const { userinput } = UserEntertedInput();
  const [imagedata, setimagedata] = useState([]);
  const [page, setpage] = useState(1);
  const [modal, setmodal] = useState(false);
  const [loading, setloading] = useState(false);
  const [imagehold, setimagehold] = useState("");
  const [holdertitle, setholdertitle] = useState("");
  const [holderlink, setholderlink] = useState("");

  let api = process.env.React_App_first_search_api
  let engineoid = process.env.React_App_first_search_engine
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
    console.log(link);
    console.log(title);
    console.log(image.contextLink);
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
      <div className="universal images-to-show">
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
              imagedata.map((e) => {
                let { link, title, image } = e;
                return link ? (
                  <div className="image-box">
                    <img
                      className="image-css"
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
          <div className="universal another-box">
            <div className="universal inside-another-box">
              <img src={Close} style={{cursor : 'pointer'}} onClick={closefullview} alt="" />
              <Link target="_blank" to={holderlink} className="universal link link-images-add ">
                <div>
                  <img src={imagehold} alt="" />
                </div>
                <div>
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
