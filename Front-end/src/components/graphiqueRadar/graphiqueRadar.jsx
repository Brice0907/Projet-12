/* eslint-disable react/prop-types */
import './style/graphiqueRadar.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function GraphiqueRadar({ performance }) {

    console.log('perfomance', performance);

    const namePerf = ['Cardio', 'Energy', 'Endurance', 'Strength', 'Speed', 'Intensity'];

    return <>{performance && namePerf &&
        <div className='radar'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="66%" data={performance.data.data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey='kind' tick={(props) => <text {...props} className='radar_text'>{namePerf[props.index]}</text>} />
                    <Radar dataKey="value" stroke="rgba(255, 1, 1, 0.70)" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.8} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    }
    </>
}

export default GraphiqueRadar