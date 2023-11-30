import './style/vertical.css'
import Relaxation from "./assets/relaxation.svg";
import Natation from './assets/natation.svg'
import Vélo from './assets/vélo.svg'
import Musculation from './assets/Musculation.svg'

function Vertical() {
    return <div className='vertical'>
        <div className='vertical_button'>
            <div className='vertical_button_logo'>
                <img src={Relaxation} alt="Logo relaxation" />
            </div>
            <div className='vertical_button_logo'>
                <img src={Natation} alt="Logo natation" />
            </div>
            <div className='vertical_button_logo'>
                <img src={Vélo} alt="Logo vélo" />
            </div>
            <div className='vertical_button_logo'>
                <img src={Musculation} alt="Logo musculation" />
            </div>
        </div>
        <div className='vertical_text'>
            Copyright, SportSee 2020
        </div>
    </div>
}

export default Vertical