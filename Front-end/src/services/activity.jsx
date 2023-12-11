import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
                console.error("C'est l'erreur catch");
            })
    }, [userId]);

    return activity;
}