import React, {useState} from 'react';
import { Routineactivitysubcomp, RoutineDelete } from '..';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditRoutine from './EditRoutine';
import AddRoutine from './AddActivity'
import styled from "styled-components";
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
const Routines = ({routine, userToken, setallroutines, setusersRoutines, allRoutines, usersRoutines, allActivities }) => {
  const[show, setShow] = useState(false)
  const[addShow, setaddShow] = useState(false)
  const[updateroutine, setupdateroutine]= useState(routine.activities)
  return (
    <div className="routineContainer">
      <div className="routinebody">
        <div className="RoutineHeader">
          <div className='RoutineDescription'>
            <div className='innerbox'>     
              <div className='innerboxText' style={{fontWeight:"bolder"}}> Routine: {routine.name}</div>
              <div className='innerboxText'> Goal: {routine.goal}</div>
            </div>
            <div className='innerboxText'> By: {routine.creatorName}</div>
          </div>
          {userToken? <div className="RoutineButtons">
            <RoutineDelete 
              routineToDelete ={routine.id}
              userToken={userToken}
              setallroutines={setallroutines}
              setusersRoutines={setusersRoutines}
              allRoutines={allRoutines}
              usersRoutines={usersRoutines}
            />
            <Button
              title="Add Activity"
              type="button"
              onClick={() => setaddShow(true)}>
              <AddBoxIcon style={{ color: "white", fontSize: 30 }}></AddBoxIcon>
            </Button>
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
            >
            </AddRoutine>
            <Button
              title="Edit Routine"
              type="button"
              onClick={() => setShow(true)}>
              <EditIcon style={{ color: "white", fontSize: 30 }}></EditIcon>
            </Button>
            <EditRoutine 
              routineToDelete ={routine.id}
              show={show}
              setShow={setShow}
              userToken={userToken}
              setallroutines={setallroutines}
              setusersRoutines={setusersRoutines}
              allRoutines={allRoutines}
              usersRoutines={usersRoutines}
            >
            </EditRoutine>
          </div>: null}
        </div>
        <div>
          {updateroutine? updateroutine.map((activity)=>
            {return <Routineactivitysubcomp
              routine={routine}
              userToken={userToken}
              updateroutine={updateroutine}
              setupdateroutine={setupdateroutine}
              activity={activity}
              usersRoutines={usersRoutines}
              setusersRoutines={setusersRoutines}
              key = {activity.routineId +'/'+activity.routineActivityId}
            />}
          ):null}
         </div>
     </div>
    </div>
       
  )
}
export default Routines;