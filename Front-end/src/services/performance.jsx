import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_PERFORMANCE_MOCKED } from '../mocks/mockPerformance.js'

export default function PerformanceUser() {
    const id = useParams();
    const userId = id.id

    const [performance, setPerformance] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/user/' + userId + '/performance')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Reponse is not ok.');
                }
                return response.json();
            })
            .then((userData) => {
                setPerformance(userData);
                console.log(userData);
            })
            .catch(() => {
                const userData = USER_PERFORMANCE_MOCKED.find((performance) => performance.userId === Number(userId));
                console.log(userData);
                if (userData) {
                    setPerformance({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            })
    }, [userId]);

    return performance;
}