import './style/home.css'
import { Link } from 'react-router-dom';

function Home() {

    return <div className='home'>
        <div>
            <h1 className='home_title'>Bienvenue sur <span className='home_title_red'>SportSee</span></h1>
            <div className='home_text'>Veuillez séléctionner un utilisateur pour accéder à ses statistiques !</div>
        </div>
        <div className='home_bloc'>
            <Link to='/user/12' className='link'>
                <div className='home_bloc_btn'>Utilisateur 12</div>
            </Link>
            <Link to='/user/18' className='link'>
                <div className='home_bloc_btn'>Utilisateur 18</div>
            </Link>
        </div>
    </div>
}

export default Home