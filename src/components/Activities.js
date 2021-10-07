import React, { useState }from 'react';
import { Link } from 'react-router-dom';

import MakeActivities from './MakeActivities';

const Activities = ({userToken, myUsername, allActivities, setAllActivities, selectedAct, setSelectedAct,activityID}) => {
  
  return ( 
    <div className="allActivitiesContainer">
      <div className="activity">
        {allActivities.map(act=> {
              return (
                <div className="allActivities" key={act.id}>
                <h3 className="activityTitle"
                  onClick={() => {
                    activityID(act.id)
                    setSelectedAct(act.id)}}>
                  <Link to={`/activities/${act.id}`} className="activityLink">
                    {act.name}
                  </Link>
                </h3>
                  <p className="description">{act.description}</p>
                </div>)
              })
            }

      </div>
       {userToken?
        (
          <div className="allActAside">
        <MakeActivities
          userToken={userToken}
          allActivities={allActivities}
          setAllActivities={setAllActivities}/>
      </div>
        ):
          (<div></div>)
      }
    </div>
  )
}
  
    
export default Activities;


    
