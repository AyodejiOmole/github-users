import { useState, useEffect} from 'react';

const UseFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
       fetch(url)
        .then((res) => res.json())
        .then((user) => {
            setUsers(user);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err)
            setIsError(true);
            setIsLoading(false);
        });
    }, [url]);

    return {isLoading, isError, users};
}

export default UseFetch;