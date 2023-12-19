import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_MAIN_DATA_MOCKED } from '../mocks/mockUser.js';

export default function DataUser() {
    const id = useParams();
    const userId = id.id

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/user/' + userId)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Reponse is not ok.');
                }
                return response.json();
            })
            .then((userData) => {
                setUser(userData);
                console.log(userData);
            })
            .catch(() => {
                const userData = USER_MAIN_DATA_MOCKED.find((user) => user.id === Number(userId));
                console.log(userData);
                if (userData) {
                    setUser({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            })
    }, [userId]);

    return user;
}