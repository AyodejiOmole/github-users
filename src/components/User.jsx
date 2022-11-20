import React, { useContext }from 'react';
import { UserContext } from '../App';

const User = () => {
    const { clickedUser } = useContext(UserContext);
    return (
        <div>
            This is it.
            {clickedUser.login}
        </div>
    )
}

export default User;