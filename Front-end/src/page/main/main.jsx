import './style/main.css'
import dataUser from '../../services/data.jsx'
import Welcome from '../../components/welcome/welcome.jsx';
import GraphiqueBar from '../../components/graphiqueBar/graphiqueBar.jsx';
import activityUser from '../../services/activity.jsx';
import Statistique from '../../components/statistique/statistique.jsx';
import sessionUser from '../../services/session.jsx';
import GraphiqueLine from '../../components/graphiqueLine/graphiqueLine.jsx';

export default function Main() {

    const user = dataUser()
    const activity = activityUser();
    const session = sessionUser();

    return <div className='main_bloc'>
        <div>
            {user && <Welcome name={user.data.userInfos.firstName} />}
        </div>

        <div className='main_display'>
            <div>
                {activity && <GraphiqueBar activity={activity} />}
                {session && <GraphiqueLine session={session} />}
            </div>
            <div className='main_display_stat'>{user && <Statistique userData={user} />}</div>
        </div>


    </div>
}
