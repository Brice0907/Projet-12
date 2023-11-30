import './style/header.css';
import logo from './asset/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return <header className='header'>
        <nav className='header_nav'>
            <div className='header_nav_logo'><img src={logo} alt="Logo" className='header_nav_logo_img' />SportSee</div>
            <Link to="/" className='link'>
                <div className='header_nav_button'>Acceuil</div>
            </Link>
            <Link to='/build' className='link'>
                <div className='header_nav_button'>Profil</div>
            </Link>
            <Link to='/build' className='link'>
                <div className='header_nav_button'>Réglages</div>
            </Link>
            <Link to='/build' className='link'>
                <div className='header_nav_button'>Communauté</div>
            </Link>
        </nav>
    </header>
}

export default Header