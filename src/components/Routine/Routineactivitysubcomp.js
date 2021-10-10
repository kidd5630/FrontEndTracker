import React, {useState} from 'react';
import styled from "styled-components";
import DeleteActivity from './DeleteActivity';
import EditIcon from '@mui/icons-material/Edit';
import EditRoutineActivity from './EditActivity';

const Button = styled.button`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 6px -2px black;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  color: white;

  a:visited {
    color: white;
  }
`;



const Routineactivitysubcomp = ({activity,routine, userToken, updateroutine, setupdateroutine, setusersRoutines, usersRoutines}) => {
    const [EditShow, setEditShow] =useState(false)
    return (
        <div className="activityButtons">
            <div className="activityposts">
            <div className="activitytext">
               <div style={{fontWeight:"bolder"}}>Activity: {activity.name}</div> 
             {activity.description}  
            <div>Duration:{activity.duration} Count:{activity.count}</div>
            </div>  
            {userToken? <div className="activityUpdates"><DeleteActivity 
            routine={routine}
            userToken={userToken}
            activityToDelete={activity.routineActivityId}
            usersRoutines={usersRoutines}
            setusersRoutines={setusersRoutines}
            updateroutine={updateroutine} 
            setupdateroutine={setupdateroutine} />
            <Button
                title="Edit Activity"
                type="button"
                onClick={() => setEditShow(true)}>
                <EditIcon style={{ color: "White", fontSize: 30 }}></EditIcon>
                </Button>
            <EditRoutineActivity
            EditShow={EditShow}
            setEditShow={setEditShow}
            userToken={userToken}
            activitytoEdit ={activity.routineActivityId}
            updateroutine={updateroutine}
            setupdateroutine={setupdateroutine}
            />
            </div>
            
           
            
            
            :null }
            
             </div>
            
        </div>
        
    )
}

export default Routineactivitysubcomp;