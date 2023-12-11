import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
                console.error("C'est l'erreur catch");
            })
    }, [userId]);

    return session;
}