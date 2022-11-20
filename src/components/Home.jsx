import React, { useContext } from 'react';
import Profile from './Profile';
import UseFetch from "../services/UseFetch";
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Home = ({ url }) => {
    let { isError, isLoading, users } = UseFetch(url);
    let { setClickedUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = (user) => {
        setClickedUser(user);
        navigate("/github-user");
    }

    return (
        <div>
            {isLoading && 
            <div>
                <h1>Loading...</h1>
            </div>}

            {isError && 
            <div>
                <h1>An error occured...</h1>
            </div>}

            <div className="w-full lg:grid-cols-4 md:grid-cols-2 grid lg:px-[100px] px-4">
                {users.map((user) => {
                    return (
                    <div onClick={() => handleClick(user)} key={user.id}>
                        <Profile key={user.id} image_url={user.avatar_url} username={user.login} profile_link={user.html_url}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;