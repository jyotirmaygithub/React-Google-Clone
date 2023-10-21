import React, { useState, useEffect } from "react";
import image from "./w3schools_logo_436_2.png";


export default function Dataextract(props) {
  let {userinput} = props
  const [dataarray, setdataarray] = useState([]);
  let api = 'AIzaSyDEzB3GhWOtkizxTrw-usLiQdl5rlVRfP8'
  let engineoid = '459e8bc0984b24b03'
  
    let rapidurl =  `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=america`


  useEffect(() => {
    fetcheddata();
    async function fetcheddata() {
      try {
        let data = await fetch(rapidurl);
        let response = await data.json();
        console.log(response);
        setdataarray(response.items);
      } catch (error) {
        console.log("not able to fetch data");
      }
    }
  }, []);
  return (
    <>
      <div className="showing-data">
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
