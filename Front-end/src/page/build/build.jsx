import './style/build.css'
import { Link } from 'react-router-dom'

function Build() {
    return <div className='build'>
        <div className='build_bloc'>
            <i className="fa-solid fa-screwdriver-wrench build_bloc_logo"></i>
            <div className='build_bloc_texte'>Désolé cette page est actuellement en travaux !</div>
            <div className='build_bloc_texte'>Pour retourner à l&apos;acceuil <Link to="/" className='build_bloc_texte_red'>Cliquez ici !</Link></div>
        </div>
    </div>
}

export default Build