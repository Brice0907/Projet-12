/* eslint-disable react/prop-types */
import './style/statistique.css'
import calories from './assets/calories-icon.png'
import proteines from './assets/protein-icon.png'
import lipides from './assets/fat-icon.png'
import glucides from './assets/carbs-icon.png'

function Statistique({ userData }) {

    console.log('data', userData);

    return <div className='stat'>

        <div className='stat_bloc'>
            <img src={calories} alt="Logo Calories" />
            <div className='stat_bloc_text'>
                <div className='stat_bloc_text_numb'>{userData.data.keyData.calorieCount}kCal</div>
                <div className='stat_bloc_text_let'>Calories</div>
            </div>
        </div>

        <div className='stat_bloc'>
            <img src={proteines} alt="Logo Protéines" />
            <div className='stat_bloc_text'>
                <div className='stat_bloc_text_numb'>{userData.data.keyData.proteinCount}g</div>
                <div className='stat_bloc_text_let'>Protéines</div>
            </div>
        </div>

        <div className='stat_bloc'>
            <img src={glucides} alt="Logo Calories" />
            <div className='stat_bloc_text'>
                <div className='stat_bloc_text_numb'>{userData.data.keyData.carbohydrateCount}g</div>
                <div className='stat_bloc_text_let'>Glucides</div>
            </div>
        </div>

        <div className='stat_bloc'>
            <img src={lipides} alt="Logo Calories" />
            <div className='stat_bloc_text'>
                <div className='stat_bloc_text_numb'>{userData.data.keyData.lipidCount}g</div>
                <div className='stat_bloc_text_let'>Lipides</div>
            </div>
        </div>

    </div>
}

export default Statistique