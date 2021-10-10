import React from 'react';
import Routines  from './Routines';
import { Link } from 'react-router-dom';
const Routineslist = ({userToken, myUsername, allActivities, allRoutines, setallroutines, setusersRoutines, pageRoutines, usersRoutines}) => {
  console.log(usersRoutines,"kkk")
  return (
        <div>
        {userToken ?
            <div className="loggedInMessage">
              <h1> {myUsername}'s Routines </h1>
            </div>:
            <div className="loggedOutMessage">
              <h1>All Routines</h1>
            </div>
        }
        {userToken? <Link to={`/myroutines/new`} className="activityLink">
           <div>Create routine</div>
                  </Link>: null}
          <div>
            {pageRoutines.map((routine)=>
            {return (<Routines
            pageRoutines={pageRoutines}
            routine ={routine} 
            userToken ={userToken}
            key ={routine.id}
            allRoutines={allRoutines}
            usersRoutines={usersRoutines}
            setallroutines={setallroutines}
            setusersRoutines={setusersRoutines}
            allActivities={allActivities}
            />)}
            )}
          </div>
        </div>
    )
}

export default Routineslist;


