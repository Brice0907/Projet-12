/* eslint-disable react/prop-types */
import './style/graphiqueRadial.css'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function GraphiqueRadial({ data }) {

    // console.log('dataaaaaa', data);

    const score = data.data.score * 100

    const donné = [{
        pourcentage: 100,
        name: 'Score',
    },
    {
        pourcentage: score,
        name: 'Score',
    }]

    return <>
        {data && donné &&
            <div className='radial'>
                <div className='radial_title'>Score</div>
                <div className='radial_bloc'>
                    <div className='radial_bloc_text'><span className='radial_bloc_text_gras'>{score}%</span> <br /> de votre <br /> objectif</div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius='0%' outerRadius='133%' barSize={13} data={donné}>
                        <RadialBar fill='#F00' clockWise dataKey={'pourcentage'} cornerRadius={10} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        }
    </>
}

export default GraphiqueRadial