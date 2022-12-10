import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  const [ searchText, setSearchText ] = useState("");
  const [ url, setUrl ] = useState("https://api.github.com/users");
  // const navigate = useNavigate();
  
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchText((prev) => prev = value);
  }

  const handleClick = () => {
    if(searchText === "") {
      alert("Nothing in the search box!");
    } else {
      // const { users } = useFetch(`https://api.github.com/users/${searchText}`);
      // navigate(`/github-users/${searchText}`);
      // dispatch(setUsers(users));
    }
  }

  return (
      <div className="px-20 pt-10">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl text-black text-center my-auto font-extrabold mb-10">Github Users</h1>
          <div>
              <input type="text" className="rounded shadow-lg px-3 py-4" placeholder="Enter github username..." value={searchText} onChange={handleChange}/>
              <button className="bg-blue-400 px-3 py-4 text-white shadow-lg hover:bg-white hover:border hover:border-blue-400 hover:text-black" onClick={handleClick}>Search</button>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home url={url}/>}/>
            <Route path="/github-user/:userId" element={<User/>}/>
          </Routes>
        </Router>  
      </div>
  );
}

export default App;
