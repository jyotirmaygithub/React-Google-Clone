import React, { useContext } from 'react';
import { WriteValueContext } from "./WriteValueContext";

export default function Search() {
  const { writevalue, setwritevalue } = useContext(WriteValueContext);

  function userwriting(e) {
    console.log(e.target.value);
    setwritevalue(e.target.value);
  }

  return (
    <div>
      <input
        onChange={userwriting}
        className="input-bar"
        value={writevalue}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}
