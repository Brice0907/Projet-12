import './style/main.css'
import dataUser from '../../services/user.jsx'
import Welcome from '../../components/welcome/welcome.jsx';
import GraphiqueBar from '../../components/graphiqueBar/graphiqueBar.jsx';
import activityUser from '../../services/activity.jsx';
import Statistique from '../../components/statistique/statistique.jsx';
import sessionUser from '../../services/session.jsx';
import GraphiqueLine from '../../components/graphiqueLine/graphiqueLine.jsx';
import GraphiqueRadar from '../../components/graphiqueRadar/graphiqueRadar.jsx';
import performanceUser from '../../services/performance.jsx';
import GraphiqueRadial from '../../components/graphiqueRadial/graphiqueRadial.jsx';

export default function Main() {

    const user = dataUser()
    const activity = activityUser();
    const session = sessionUser();
    const performance = performanceUser();

    return <div className='main_bloc'>
        <div>
            {user && <Welcome name={user.data.userInfos.firstName} />}
        </div>

        <div className='main_display'>
            <div className='main_display_resp'>
                {activity && <GraphiqueBar activity={activity} />}
                <div className='main_display_graph'>
                    {session && <GraphiqueLine session={session} />}
                    {performance && <GraphiqueRadar performance={performance} />}
                    {user && <GraphiqueRadial data={user} />}
                </div>
            </div>
            <div className='main_display_stat'>{user && <Statistique userData={user} />}</div>
        </div>
    </div>
}
