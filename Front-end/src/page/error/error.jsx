import './style/error.css'
import Header from '../../components/header/header'
import Vertical from '../../components/vertical/vertical'
import { Link } from 'react-router-dom'

export default function Error() {
    return <>
        <Header />
        <main className="main">
            <Vertical />
            <div className="error">
                <p className="error_404">404</p>
                <p className="error_text">Oups ! La page que vous demandez n&apos;existe pas.</p>
                <Link to='/' className="error_link">Retourner sur la page d&apos;Accueil</Link>
            </div>
        </main>
    </>
}