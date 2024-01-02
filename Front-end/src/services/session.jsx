import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_AVERAGE_SESSIONS_MOCKED } from '../mocks/mockSession.js'

export default function SessionUser() {
    const id = useParams();
    const userId = id.id

    const [session, setSession] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/' + userId + '/average-sessions');
                const userData = await response.json();

                setSession(userData);
                // console.log(userData);
            } catch (error) {
                const userData = USER_AVERAGE_SESSIONS_MOCKED.find((session) => session.userId === Number(userId));
                console.log(userData);

                if (userData) {
                    setSession({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            }
        };

        fetchData();
    }, [userId]);

    return session;
}