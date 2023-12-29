import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Loader";
import Subsitute from "../pictures/subimage.png";
import { UserEntertedInput } from "../Context/SearchContext";
import { Link } from "react-router-dom";

export default function Links() {
  const [dataarray, setdataarray] = useState([]);
  const [searchinfo, setsearchinfo] = useState("");
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const { userinput } = UserEntertedInput();

  let api =  process.env.React_App_First_Search_Api
  let engineoid = process.env.React_App_First_Search_Engine
  let rapidurl;

  useEffect(() => {
    fetcheddata();
    async function fetcheddata() {
      if (userinput) {
        rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page}`;
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          setsearchinfo(response.searchInformation);
          setdataarray(response.items);
        } catch (error) {
          console.log("not able to fetch data");
        }
      }
    }
  }, [userinput]);

  async function fetchmoredata() {
    setloading(true);
    try {
      rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${
        page + 11
      }`;
      setpage(page + 11);
      let data = await fetch(rapidurl);
      let response = await data.json();
      setdataarray(dataarray.concat(response.items));
      setloading(false);
    } catch (error) {
      console.log("unable to fetch data");
    }
  }
  return (
    <>
      <div className="pl-40">
        {searchinfo && (
          <div className="flex space-x-2 mt-5">
            <h4>About {searchinfo.formattedTotalResults}</h4>
            <p>results {searchinfo.searchTime}</p>
          </div>// removing showing data classs reconsider it 
        )}
        <InfiniteScroll
          dataLength={dataarray.length}
          next={fetchmoredata}
          hasMore={true}
          loader={<Spinner />}
          scrollThreshold={0.9}
        >
          {loading && <Spinner />}
          {dataarray.map((e, index) => {
            let { pagemap, formattedUrl, title, displayLink, snippet } = e;
            return (
              <div key={index} className="my-10">
               {formattedUrl ? <Link className=" hover-link" target="_blank" to={formattedUrl}>
                  <div className="flex justify-center items-center space-x-2 link-box-of-site">
                    {pagemap && pagemap.metatags && pagemap.metatags[0] && pagemap.metatags[0]["og:image"] ? (
                      <img src={pagemap.metatags[0]["og:image"]} alt="" />
                    ) : (
                      <img src={Subsitute} alt="" />
                    )}
                    <div>
                      <h3 className="text-[20px] font-[600]">{title}</h3>
                      <h5>{displayLink}</h5>
                    </div>
                  </div>
                  <div className="title-des font-[600]">
                    {snippet ? <h2>{snippet.split(" ").splice(0, 6).join(" ")}...</h2> : '' }
                    {pagemap && pagemap.metatags && pagemap.metatags[0] &&  pagemap.metatags[0["og:description"]] ? <p>{pagemap.metatags[0]["og:description"]}</p> : ''}
                  </div>
                </Link> : ''}
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}
