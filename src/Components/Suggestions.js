import React, { useState, useEffect } from "react";
import { UserEntertedInput } from "../Context/SearchContext";

export default function Suggestions(props) {
  const [recommends, setrecommends] = useState([]);
  const [display, setdisplay] = useState(false);
  const { searchTerm, setuserinput } = UserEntertedInput();

  let api = process.env.React_App_First_Search_Api;
  let engineoid = process.env.React_App_First_Search_Engine;
  let rapidurl;
  console.log("let check user input  ", searchTerm);
  useEffect(() => {
    if (searchTerm) {
      // console.log("is it working of every typing")
      fetcheddata();
      async function fetcheddata() {
        rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${searchTerm}&start=1`;
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          setrecommends(response.items);
        } catch (error) {
          console.log("not able to fetch data");
        }
      }
      setdisplay(true);
    }
  }, [searchTerm]);

  return (
    <>
      {display && (
        <div className="fixed bg-white top-[52px] left-36 px-10 py-5 w-[50vw] z-10 border-b border-l border-r input-bar rounded">
          {recommends.map((e, index) => {
            let { title } = e;
            return (
              <div
                className="cursor-pointer leading-[1.8] suggestions"
                key={index}
              >
                <p
                  onClick={() => {
                    setuserinput(title);
                    setdisplay(false);
                  }}
                >
                  {title}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
