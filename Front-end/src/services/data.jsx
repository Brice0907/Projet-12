import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DataUser() {
    const id = useParams();
    const userId = id.id

    const [user, setUser] = useState(null)

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
                console.error("C'est l'erreur catch");
            })
    }, [userId]);

    return user;
}

export default DataUser