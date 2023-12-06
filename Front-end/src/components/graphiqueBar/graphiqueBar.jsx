import './style/graphiqueBar.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function GraphiqueBar({ userId }) {

    // const [activity, setActivity] = useState(null)

    // useEffect(() => {
    //     fetch('http://localhost:3000/user/' + userId + '/activity')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Reponse is not ok.');
    //             }
    //             return response.json();
    //         })
    //         .then((userActivity) => {
    //             setActivity(userActivity);
    //             console.log(userActivity);
    //         })
    //         .catch(() => {
    //             console.error("C'est l'erreur catch");
    //         })
    // }, [userId]);
    // console.log('activity', activity);

    return <div className='graphique'>
        blabla

        <BarChart width={835} height={320} data={'activity.data.sessions'}>
        </BarChart>

    </div>
}

export default GraphiqueBar