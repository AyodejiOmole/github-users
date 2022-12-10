import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedUser, removeUser } from '../redux/actions/userActions';
import axios from 'axios';

const User = () => {
    const user = useSelector(state => state.selectedUser);
    const { userId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://api.github.com/users/${userId}`)
            .catch(error => {
                console.log(error);
            });

        dispatch(setSelectedUser(response.data));
    }

    useEffect(() => {
        if(userId && userId != "") {
            fetchProductDetails();
        }

        return () => {
            dispatch(removeUser());
        }
    }, [userId]);

    return (
        <div>
            {Object.keys(user).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>
                    This is it.
                    {user.login}
                </div>
            )}
        </div>
    )
}

export default User;