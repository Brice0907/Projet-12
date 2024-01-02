/* eslint-disable react/prop-types */
import './style/graphiqueBar.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ovalRed from './assets/ovalred.svg';
import ovalBlack from './assets/ovalblack.svg'


function GraphiqueBar({ activity }) {

    // console.log('activity', activity);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom_tooltip">
                    <p className="custom_tooltip_text">{`${payload[0].value}`}kg</p>
                    <p className="custom_tooltip_text">{`${payload[1].value}`}Kcal</p>
                </div>
            );
        }
        return null;
    };

    const minValue = Math.min(...activity.data.sessions.map(session => Math.min(session.kilogram, session.calories))) - 30;
    const maxValue = Math.max(...activity.data.sessions.map(session => Math.max(session.kilogram, session.calories))) + 10;
    const medianValue = Math.trunc((maxValue - minValue) / 2 + minValue);

    return <>
        {activity &&
            <div className='graphique'>
                <div className='graphique_bloc'>
                    <h2 className='graphique_bloc_title'>Activité quotidienne</h2>
                    <div className='graphique_bloc_legend'>
                        <div className='graphique_bloc_legend_kg'><img src={ovalBlack} alt="" className='graphique_bloc_legend_kg_color' />Poids (kg)</div>
                        <div className='graphique_bloc_legend_kg'><img src={ovalRed} alt="" className='graphique_bloc_legend_kg_color' />Calories brûlées (kCal)</div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height='100%'>
                    <BarChart width={500} height={500} data={activity.data.sessions} barGap={12}>
                        <CartesianGrid vertical={false} strokeDasharray="2" />
                        <XAxis axisLine={false} tickLine={false} tickFormatter={(index) => index + 1} />
                        <YAxis orientation={'right'} axisLine={false} tickLine={false} domain={[minValue, maxValue]} ticks={[minValue, medianValue, maxValue]} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="kilogram" barSize={13} radius={[7, 7, 0, 0]} fill="#282D30" />
                        <Bar dataKey="calories" barSize={13} radius={[7, 7, 0, 0]} fill="#E60000" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        }
    </>
}

export default GraphiqueBar