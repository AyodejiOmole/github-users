import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="grid place-content-center">
        <h1 className="text-3xl text-black font-extrabold mb-10">Github Users</h1>
        {isLoading && 
          <div>
            <h1>Loading...</h1>
          </div>}

        {isError && 
          <div>
            <h1>An error occured...</h1>
          </div>}

        {users.map((user) => {
          return (
            <Profile key={user.id} image_url={user.avatar_url} username={user.login} profile_link={user.html_url}/>
          )
        })}
    </div>
  );
}

export default App;
