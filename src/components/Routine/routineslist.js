import React from 'react';
import Routines  from './Routines';
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


