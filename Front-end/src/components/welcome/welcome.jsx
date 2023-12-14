import './style/welcome.css'

function welcome({ name }) {

    return <div className="welcome">
        <h1 className='welcome_title'>Bonjour <span className="welcome_title_red">{name}</span></h1>
        <div className='welcome_texte'>Félicitations ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
}

export default welcome