/* eslint-disable react/prop-types */
import './style/graphiqueLine.css'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function GraphiqueLine({ session }) {

    console.log('session', session);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom_tooltip_line">
                    <p className="custom_tooltip_line_text">{`${payload[0].value}`} min</p>
                </div>
            );
        }
        return null;
    };

    const letter = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const formatDayInitial = (day) => {
        if (day >= 1 && day <= 7) {
            return letter[day - 1];
        }
        return '';
    };

    const CustomLegend = () => {
        return (
            <div>
                <div className='custom_legend'>Durée moyenne des sessions</div>
                <div className='custom_background'></div>
            </div>
        );
    }

    return <>{session &&
        <div className='line'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={260} height={250} data={session.data.sessions} margin={{ top: 70, right: 0, left: 0, bottom: 7 }}>
                    <Legend content={CustomLegend} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', opacity: '0.5' }} padding={{ left: 15, right: 15 }} tickFormatter={formatDayInitial} />
                    <Tooltip content={CustomTooltip} />
                    <Line type="basis" dataKey="sessionLength" strokeWidth={2} stroke="url(#gradient)" dot={false} />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#999999" />
                            <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                    </defs>

                </LineChart>
            </ResponsiveContainer>
        </div>
    } </>


}

export default GraphiqueLine