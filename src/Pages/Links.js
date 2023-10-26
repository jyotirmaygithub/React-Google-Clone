import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Loader";
import { UserEntertedInput } from "../Context/SearchContext";

export default function Links() {
  const [dataarray, setdataarray] = useState([]);
  const [searchinfo, setsearchinfo] = useState("");
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const { userinput } = UserEntertedInput();

  let api = "AIzaSyBwDwIJiPOAjMKn-Nae7LFIf5Ur0WFBLLE";
  let engineoid = "c7dab37e91cbc48c8";
  let rapidurl;

  console.log("this is coming from usecontext = ", userinput);


  useEffect(() => {
    fetcheddata();
    async function fetcheddata() {
      if (userinput) {
        // rapidurl =  `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page}`
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          console.log(response);
          console.log(response.searchInformation);
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
    //   rapidurl =  `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=${page + 1}`
      console.log("what is the value of userinput = ", userinput);
      setpage(page + 1);
      let data = await fetch(rapidurl);
      let response = await data.json();
      console.log("this is the new page data = ", response.items);
      setdataarray(dataarray.concat(response.items));
      console.log("this is total data", dataarray);
      setloading(false);
    } catch (error) {
      console.log("unable to fetch data");
    }
  }
  return (
    <>
      <div className="showing-data links-to-show">
        {searchinfo && (
          <div className="universal">
            <h4>About {searchinfo.formattedTotalResults}</h4>
            <p>results {searchinfo.searchTime}</p>
          </div>
        )}
        <InfiniteScroll
          // className="universal big-box-add"
          dataLength={dataarray.length}
          next={fetchmoredata}
          hasMore={true}
          loader={<Spinner />}
          scrollThreshold={0.9}
        >
          {loading && <Spinner />}
          {dataarray.map((e, index) => {
            let { pagemap, title, displayLink, snippet } = e;
            return (
              <div key={index} className="container">
                <div className="universal link-box-of-site">
                  {pagemap && (
                    <img src={pagemap.metatags[0]["og:image"]} alt="" />
                  )}
                  <div>
                    <h3>{title}</h3>
                    <h5>{displayLink}</h5>
                  </div>
                </div>
                <div className="title-des">
                  <h2>{snippet.split(" ").splice(0, 6).join(" ")} ...</h2>
                  {pagemap && <p>{pagemap.metatags[0]["og:description"]}</p>}
                </div>
              </div>
            );
          })}
        </InfiniteScroll>   
      </div>
    </>
  );
}
