import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import MakeActivities from './MakeActivities';

const Header = styled.header`
  font-family: "Akaya Telivigala", cursive;
  font-weight: 100;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding: 0.25em 0;
  background: #033a8d;;
  color: #fafafa;
`;

const Container = styled.header`
  background: #587cf5;
  color: #fafafa;
`;

const Activities = ({userToken, allActivities, setAllActivities, setSelectedAct,activityID}) => {
  
  return ( 
    <Container>
    <div className="allActivitiesContainer">
      <div className="activity">
        {allActivities.map(act=> {
              return (
                <div className="allActivities" key={act.id}>
                <h3 className="activityTitle"
                  onClick={() => {
                    activityID(act.id)
                    setSelectedAct(act.id)
                    }}>
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
    </Container>
  )
}
  
    
export default Activities;