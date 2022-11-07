import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import UseFetch from "./services/UseFetch";

function App() {
  const [ searchText, setSearchText ] = useState("");
  const [ url, setUrl ] = useState("https://api.github.com/users");
  let { isError, isLoading, users } = UseFetch(url);
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchText((prev) => prev = value);
  }

  useEffect(() => {
    if(searchText === "") {
      console.log("Whatever");
    } else {
      setUrl(`https://api.github.com/users/${searchText}`);
    }
  }, [searchText]);

  const handleClick = () => {
    if(searchText === "") {
      alert("Nothing in the search box!");
    } else {
      setUrl(`https://api.github.com/users/${searchText}`);
    }
  }

  return (
    <div className="px-20">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-black text-center my-auto font-extrabold mb-10">Github Users</h1>
        <div>
            <input type="text" className="roundec shadow-sm px-3" placeholder="Enter github username..." value={searchText} onChange={handleChange}/>
            {/* <button className="bg-blue-400 rounded" onClick={handleClick}>Search</button> */}
        </div>
      </div>
      

      {isLoading && 
        <div>
          <h1>Loading...</h1>
        </div>}

      {isError && 
        <div>
          <h1>An error occured...</h1>
        </div>}

      <div className="w-full lg:grid-cols-4 md:grid-cols-2 grid lg:px-[150px] px-4">
        {users.map((user) => {
          return (
            <Profile key={user.id} image_url={user.avatar_url} username={user.login} profile_link={user.html_url}/>
          )
        })}
      </div>
        
    </div>
  );
}

export default App;
