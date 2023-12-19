import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_ACTIVITY } from '../mocks/mockActivity.js';

export default function ActivityUser() {
    const id = useParams();
    const userId = id.id

    const [activity, setActivity] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/user/' + userId + '/activity')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Reponse is not ok.');
                }
                return response.json();
            })
            .then((userData) => {
                setActivity(userData);
                console.log(userData);
            })
            .catch(() => {
                const userData = USER_ACTIVITY.find((activity) => activity.userId === Number(userId));
                console.log(userData);
                if (userData) {
                    setActivity({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            })
    }, [userId]);

    return activity;
}