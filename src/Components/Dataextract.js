import React, { useState, useEffect } from "react";

export default function Dataextract() {
  const [dataarray, setdataarray] = useState([]);
  let rapidurl =
    "https://google-web-search1.p.rapidapi.com/?query=contain&limit=100&related_keywords=true";
  const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'c6b835283dmsh5d9eb34acc6ca5ap1ed45bjsn5a4937afc575',
      "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetcheddata();
    async function fetcheddata() {
      try {
        let data = await fetch(rapidurl, options);
        let response = await data.json();
        console.log(response.results);
        setdataarray(response.results);
      } catch (error) {
        console.log("not able to fetch data");
      }
    }
  }, []);
  return (
    <>
      <div>
        {dataarray.map((e, index) => {
          return (
            <div key={index}>
              <h5>{e.url}</h5>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
