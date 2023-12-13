/* eslint-disable react/prop-types */
import './style/graphiqueBar.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
                    <BarChart width={500} height={0} data={activity.data.sessions}>
                        <CartesianGrid vertical={false} strokeDasharray="2" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis orientation={'right'} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="kilogram" barSize={13} radius={[7, 7, 0, 0]} fill="#282D30" activeBar={<Rectangle stroke="blue" />} />
                        <Bar dataKey="calories" barSize={13} radius={[7, 7, 0, 0]} fill="#E60000" activeBar={<Rectangle stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        }
    </>
}

export default GraphiqueBar