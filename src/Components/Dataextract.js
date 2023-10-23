import React, { useState, useEffect,useContext } from "react";
import image from "./w3schools_logo_436_2.png";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "./Loader"
import { WriteValueContext } from "./WriteValueContext";

export default function Dataextract(props) {
  // let {userinput} = props

  const [dataarray, setdataarray] = useState([]);
  const [searchinfo,setsearchinfo] = useState('')
  const [page,setpage] = useState(1)
  const [loading ,setloading] = useState(false)
  const { writevalue } = useContext(WriteValueContext);

  let api = 'AIzaSyDEzB3GhWOtkizxTrw-usLiQdl5rlVRfP8'
  let engineoid = '459e8bc0984b24b03'
  let  rapidurl;

  console.log("this value belongs to another page = ", writevalue)
  
  // useEffect(() => {
  //   fetcheddata();
  //   async function fetcheddata() {
  //     rapidurl =  `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=america&start=${page}`
  //     try {
  //       let data = await fetch(rapidurl);
  //       let response = await data.json();
  //       console.log(response);
  //       console.log(response.searchInformation)
  //       setsearchinfo(response.searchInformation)
  //       setdataarray(response.items);
  //     } catch (error) {
  //       console.log("not able to fetch data");
  //     }
  //   }
  // }, []);

//  async function fetchmoredata(){
//   setloading(true)
//     try {
//       rapidurl =  `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=america&start=${page + 1}`
//       setpage(page + 1)
//       let data = await fetch(rapidurl)
//       let response = await data.json()
//       console.log("this is the new page data = ",response.items)
//       setdataarray(dataarray.concat(response.items))
//       console.log("this is total data",dataarray)
//       setloading(false)

//     } catch (error) {
//       console.log("unable to fetch data")
//     }
//     // console.log("ready to fetch more data")
//   }
  return (
    <>
      <div className="showing-data">
       {searchinfo && <div className="universal">
          <h4>About { searchinfo.formattedTotalResults}</h4>
          <p>results { searchinfo.searchTime}</p>
        </div>}
        {/* <InfiniteScroll
        // className="universal big-box-add"
        dataLength={dataarray.length}
        next={fetchmoredata}
        hasMore={true}
        loader={<Spinner />}
        scrollThreshold={0.9}
      >
        {loading && <Spinner/>}
        {dataarray.map((e, index) => {
          let { pagemap, title, displayLink, snippet } = e;
          return (
            <div key={index} className="container">
              <div className="universal link-box-of-site">
               { pagemap && <img src={pagemap.metatags[0]["og:image"]} alt="" />}
               <div>

                <h3>{title}</h3>
                <h5>{displayLink}</h5>
               </div>
              </div>
              <div className="title-des">
                <h2>{snippet.split(" ").splice(0,6).join(" ")} ...</h2>
               {pagemap && <p>{pagemap.metatags[0]["og:description"]}</p>}
              </div>
            </div>
         );
        })} 
        </InfiniteScroll> */}
         <div className="universal">
          <h4>searchinfo.formattedTotalResults</h4>
          <p>searchinfo.searchTime</p>
        </div>
        <div className="universal link-box-of-site">
          <img src={image} alt="" />
          <div>
            <h3>WEB Tutorial Nashville</h3>
            <h5>www.webtutorialnashville.com</h5>
          </div>
        </div>
        <div className="title-des">
          <h2>
             w3 schools where to go ....
          </h2>
          <p>
            W3Schools offers free online tutorials, references and exercises in
            all the major languages of the web. Covering popular subjects like
            HTML, CSS, JavaScript, Python, SQL, Ja
          </p>
        </div>
      </div>
    </>
  );
}
