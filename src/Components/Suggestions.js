import React, { useState, useEffect, useRef } from "react";
import { UserEntertedInput } from "../Context/SearchContext";

export default function Suggestions() {
  const [recommends, setrecommends] = useState([]);
  const { searchTerm, setsearchTerm, setuserinput, display, setdisplay } =
    UserEntertedInput();
  const dropdownRef = useRef(null);

  let api = process.env.React_App_First_Search_Api;
  let engineoid = process.env.React_App_First_Search_Engine;
  let rapidurl;

  useEffect(() => {
    if (searchTerm) {
      fetcheddata();
      async function fetcheddata() {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        rapidurl = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${engineoid}&q=${searchTerm}&start=1`;
        try {
          let data = await fetch(rapidurl);
          let response = await data.json();
          setrecommends(response.items);
        } catch (error) {
          console.log("not able to fetch data");
        }
      }
    } else {
      setdisplay(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setdisplay(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {display && (
        <div
          ref={dropdownRef}
          className="fixed bg-white top-[52px] left-36 px-10 py-5 w-[50vw] z-10 border-b border-l border-r input-bar rounded"
        >
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
                    setsearchTerm(title);
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
