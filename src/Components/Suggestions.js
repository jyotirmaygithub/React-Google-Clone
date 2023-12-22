import React, { useState, useEffect } from "react";
import { UserEntertedInput } from "../Context/SearchContext";

export default function Suggestions(props) {
  const [recommends, setrecommends] = useState([]);
  const [display, setdisplay] = useState(true);
  const { userinput ,setuserinput } = UserEntertedInput();
  let { suggest } = props;

  let api = process.env.React_App_first_search_api;
  let engineoid = process.env.React_App_first_search_engine;
  let rapidurl;

  useEffect(() => {
    if (userinput) {
      console.log("this one is working")
      fetcheddata();
      async function fetcheddata() {
        rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=1`;
        console.log(rapidurl);
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          console.log(response);
          setrecommends(response.items);
          console.log(response.items);
        } catch (error) {
          console.log("not able to fetch data");
        }
      }
    }
  }, [userinput]);

  return (
    <>
      {display && (
        <div className="suggestion-box">
          {recommends.map((e, index) => {
            let { title } = e;
            return (
              <div className="suggestions" key={index}>
                <p
                  onClick={() => {
                    setuserinput(title)
                    setdisplay(false)
                  }}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
