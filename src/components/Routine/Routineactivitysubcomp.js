import React, {useState} from 'react';

import DeleteActivity from './DeleteActivity';
import EditIcon from '@mui/icons-material/Edit';
import EditRoutineActivity from './EditActivity';
const Routineactivitysubcomp = ({activity,routine, userToken, updateroutine, setupdateroutine, setusersRoutines, usersRoutines}) => {
    const [EditShow, setEditShow] =useState(false)
    return (
        <div>
            Activity: {activity.name}- {activity.description}  
            <div>Duration:{activity.duration} Count:{activity.count}</div>
            <DeleteActivity 
            routine={routine}
            userToken={userToken}
            activityToDelete={activity.routineActivityId}
            usersRoutines={usersRoutines}
            setusersRoutines={setusersRoutines}
            updateroutine={updateroutine} 
            setupdateroutine={setupdateroutine} />
            <button
                type="button"
                onClick={() => setEditShow(true)}>
                <EditIcon style={{ color: "black", fontSize: 30 }}></EditIcon>
                </button>
            <EditRoutineActivity
            EditShow={EditShow}
            setEditShow={setEditShow}
            userToken={userToken}
            activitytoEdit ={activity.routineActivityId}
            updateroutine={updateroutine}
            setupdateroutine={setupdateroutine}
            />
        </div>
        
    )
}

export default Routineactivitysubcomp;