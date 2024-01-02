import React, { useState, useEffect } from "react";
import { UserEntertedInput } from "../Context/SearchContext";

export default function Suggestions(props) {
  const [recommends, setrecommends] = useState([]);
  const [display, setdisplay] = useState(true);
  const { userinput ,setuserinput } = UserEntertedInput();
  let { suggest } = props;

  let api = process.env.React_App_First_Search_Api;
  let engineoid = process.env.React_App_First_Search_Engine;
  let rapidurl;

  useEffect(() => {
    if (userinput) {
      fetcheddata();
      async function fetcheddata() {
        rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${userinput}&start=1`;
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          setrecommends(response.items);
        } catch (error) {
          console.log("not able to fetch data");
        }
      }
    }
  }, [userinput]);

  return (
    <>
      {display && (
        <div className="fixed bg-white top-[55px] left-[150px] px-10 py-5 w-[50vw] z-10 border-b border-l border-r border-black">
          {recommends.map((e, index) => {
            let { title } = e;
            return (
              <div className="cursor-pointer leading-[2] suggestions" key={index}>
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
