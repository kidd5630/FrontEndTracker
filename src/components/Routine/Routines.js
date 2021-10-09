import React, {useState} from 'react';
import { Routineactivitysubcomp, RoutineDelete } from '..';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditRoutine from './EditRoutine';
import AddRoutine from './AddActivity'
const Routines = ({routine, userToken, setallroutines, setusersRoutines, allRoutines, usersRoutines, allActivities }) => {
    const[show, setShow] = useState(false)
    const[addShow, setaddShow] = useState(false)
    const[updateroutine, setupdateroutine]= useState(routine)
    return (
     <div>
         <div className="RoutineHeader">
             <div className='RoutineDescription'>
                <div className='innerbox'>
                     
                <div className='innerboxText'> Routine: {routine.name}  </div>
                <div className='innerboxText'> Goal: {routine.goal} </div>
                
                </div>
                <div className='innerboxText'> By: {routine.creatorName}</div>
                
            </div>
         {userToken? <div className="deleteButton"> <RoutineDelete 
                routineToDelete ={routine.id}
                userToken={userToken}
                setallroutines={setallroutines}
                setusersRoutines={setusersRoutines}
                allRoutines={allRoutines}
                usersRoutines={usersRoutines}
                /></div>: null}
             {userToken ? 
            <div className="deleteButton">
                <button
                type="button"
                onClick={() => setaddShow(true)}>
                <AddBoxIcon style={{ color: "black", fontSize: 30 }}></AddBoxIcon>
                </button>
                <AddRoutine
                routine={routine}
                routineToDelete ={routine.id}
                addShow={addShow}
                setaddShow={setaddShow}
                userToken={userToken}
                setallroutines={setallroutines}
                setusersRoutines={setusersRoutines}
                allRoutines={allRoutines}
                usersRoutines={usersRoutines}
                allActivities={allActivities}
                setupdateroutine={setupdateroutine}
                updateroutine={updateroutine}
                ></AddRoutine>
            </div>:null}
            {userToken ? 
            <div className="deleteButton">
                <button
                type="button"
                onClick={() => setShow(true)}>
                <EditIcon style={{ color: "black", fontSize: 30 }}></EditIcon>
                </button>
                <EditRoutine 
                routineToDelete ={routine.id}
                show={show}
                setShow={setShow}
                userToken={userToken}
                setallroutines={setallroutines}
                setusersRoutines={setusersRoutines}
                allRoutines={allRoutines}
                usersRoutines={usersRoutines}
                ></EditRoutine>
            </div>:null}

        </div>
        
         <div>
             {updateroutine.activities? updateroutine.activities.map((activity)=>
             {return <Routineactivitysubcomp
            allActivities={}
            activity={activity}
            key = {activity.routineId +'/'+activity.routineActivityId}
            />
            }
             ):null}
         </div>
         
     </div>
       
    )
}

export default Routines;


// {id: 2677, creatorId: 858, isPublic: true, name: 'Another One', goal: 'Bites the DUST!', …}
// activities: [{…}]
// creatorId: 858
// creatorName: "user06"
// goal: "Bites the DUST!"
// id: 2677
// isPublic: true
// name: "Another One"
// [[Prototype]]: Object