import React from 'react';

const Routines = ({userToken, myUsername}) => {
    return (
        <>
        <div>
        {userToken ?
        <div className="loggedInMessage">
          <h1> {myUsername}'s Routines </h1>
        </div>:
        <>
        <div className="loggedOutMessage">
        <h1>all routines</h1>
        </div>
        </>
        }
        </div>
        </>
    )
}
<>
        <div className="routines">
            <h1>Routines</h1>
        </div>
    </>
export default Routines;