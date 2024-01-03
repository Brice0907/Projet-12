import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_MAIN_DATA_MOCKED } from '../mocks/mockUser.js';

export default function DataUser() {
    const id = useParams();
    const userId = id.id

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/' + userId);
                const userData = await response.json();

                setUser(userData);
                // console.log(userData);
            } catch (error) {
                const userData = USER_MAIN_DATA_MOCKED.find((user) => user.id === Number(userId));
                // console.log(userData);

                if (userData) {
                    setUser({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            }
        };

        fetchData();
    }, [userId]);

    return user;
}