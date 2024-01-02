import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_PERFORMANCE_MOCKED } from '../mocks/mockPerformance.js'

export default function PerformanceUser() {
    const id = useParams();
    const userId = id.id

    const [performance, setPerformance] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/' + userId + '/performance');
                const userData = await response.json();

                setPerformance(userData);
                // console.log(userData);
            } catch (error) {
                const userData = USER_PERFORMANCE_MOCKED.find((performance) => performance.userId === Number(userId));
                console.log(userData);

                if (userData) {
                    setPerformance({ data: userData });
                } else {
                    console.error("No user found in mock data");
                }
            }
        };

        fetchData();
    }, [userId]);

    return performance;
}