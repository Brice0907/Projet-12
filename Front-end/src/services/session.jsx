import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_AVERAGE_SESSIONS_MOCKED } from '../mocks/mockSession.js'

export default function SessionUser() {
    const id = useParams();
    const userId = id.id

    const [session, setSession] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/user/' + userId + '/average-sessions')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Reponse is not ok.');
                }
                return response.json();
            })
            .then((userData) => {
                setSession(userData);
                console.log(userData);
            })
            .catch(() => {
                const userData = USER_AVERAGE_SESSIONS_MOCKED.find((session) => session.userId === Number(userId));
                console.log(userData);
                if (userData) {
                    setSession({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            })
    }, [userId]);

    return session;
}