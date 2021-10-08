import React from 'react';
import CreateRoutine from './CreateRoutine';
import Routines  from './Routines';
import { Link } from 'react-router-dom';
const Routineslist = ({userToken, myUsername, allroutines}) => {
  console.log(myUsername, allroutines[0])
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
            {allroutines.map((routine)=>
            {return (<Routines
            routine ={routine} 
            usertoken ={userToken}
            key ={routine.id}
            />)}
            )}
          </div>
        </div>
    )
}

export default Routineslist;


