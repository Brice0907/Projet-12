import './style/main.css'
// import { useParams } from "react-router-dom";
import dataUser from '../../services/data.jsx'
import Welcome from '../../components/welcome/welcome.jsx';
import GraphiqueBar from '../../components/graphiqueBar/graphiqueBar.jsx';
// import { useEffect, useState } from 'react';

export default function Main() {
    // const id = useParams();
    // const userId = id.id

    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     fetch('http://localhost:3000/user/' + userId)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Reponse is not ok.');
    //             }
    //             return response.json();
    //         })
    //         .then((userData) => {
    //             setUser(userData);
    //             console.log(userData);
    //         })
    //         .catch(() => {
    //             console.error("C'est l'erreur catch");
    //         })
    // }, [userId]);
    const user = dataUser()

    return <div>
        <div>
            {user && <Welcome name={user.data.userInfos.firstName} />}
        </div>
        {/* <GraphiqueBar userId={userId} /> */}
    </div>
}
