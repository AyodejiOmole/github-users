import React from 'react';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUsers } from '../redux/actions/userActions';
import axios from 'axios';

const Home = ({ url }) => {
    const Users = useSelector(state => state.users.gitHubUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (userId) => {
        navigate(`/github-user/${userId}`);
    }
    
    const getUsers = async () => {
        const response = await axios
            .get(url)
            .catch((error) => {
                console.log(error);
            });
        dispatch(setUsers(response.data))
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {Users.length === 0 && 
            <div>
                <h1>Loading...</h1>
            </div>}

            {/* {isError && 
            <div>
                <h1>An error occured...</h1>
            </div>} */}

            <div className="w-full lg:grid-cols-4 md:grid-cols-2 grid lg:px-[100px] px-4">
                {Users.map((user) => {
                    return (
                    <div onClick={() => handleClick(user.id)} key={user.id}>
                        <Profile key={user.id} image_url={user.avatar_url} username={user.login} profile_link={user.html_url}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;