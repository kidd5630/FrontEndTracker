import React from 'react';
import { Routineactivitysubcomp, RoutineDelete } from '..';

const Routines = ({routine, usertoken}) => {
    
    return (
     <div>
         <div className="RoutineHeader">
             Routine:  
         <div style={{display: "inline"}}> {routine.name} </div>
         <div style={{display: "inline"}}> Goal: {routine.goal} </div>
         <div style={{display: "inline"}}>By {routine.creatorName}</div>
         {usertoken? <div style={{display: "inline"}}> <RoutineDelete routineToDelete ={routine.id} usertoken={usertoken}/></div>: null}
        </div>
         
         <div>
             {routine.activities.map((activity)=>
             {return <Routineactivitysubcomp
            activity={activity}
            key = {activity.routineId +'/'+activity.routineActivityId}
            />
            }
             )}
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