import "./Group3.css";
import iconSearch from "../assets/icon-search.svg";
import { useState, useEffect } from "react";







export const Group3 = ({ theme, setData }) => {
  const [search, setSearch] = useState("octocat");

  async function handleClick() {
    try{
      const response = await fetch(`https://api.github.com/users/${search}`);
      const datas = await response.json();
      setData(datas);
      setSearch("");
      console.log(datas);
       }catch(err){
         console.log(err)
       }
    }
    
    useEffect(() => {
      handleClick();
    }, []);


    return (
    <div className={theme ? "group3Light" : "group3"}>
      <img src={iconSearch} />
      <input
        type="text"
        placeholder="Search for Github username..."
        required
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
