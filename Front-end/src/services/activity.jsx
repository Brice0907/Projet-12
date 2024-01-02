import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_ACTIVITY } from '../mocks/mockActivity.js';

export default function ActivityUser() {
    const id = useParams();
    const userId = id.id

    const [activity, setActivity] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/' + userId + '/activity');
                const userData = await response.json();

                setActivity(userData);
                // console.log(userData);
            } catch (error) {
                const userData = USER_ACTIVITY.find((activity) => activity.userId === Number(userId));
                console.log(userData);

                if (userData) {
                    setActivity({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            }
        };

        fetchData();
    }, [userId]);

    return activity;
}