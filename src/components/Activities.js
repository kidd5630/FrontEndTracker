import React from 'react';
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
  background: #033a8d;
  color: #fafafa;
`;
const Container = styled.header`
  background: #587cf5;
  color: #fafafa;
`;
const Activities = ({userToken, allActivities, setAllActivities, setSelectedAct,activityID}) => {
  return ( 
    <Container>
      <Header><h1>All Activities</h1></Header>
      <div className="allActivities">
        <div className="activity">
          {userToken?
            (<div className="activityContainer">
              <MakeActivities
                userToken={userToken}
                allActivities={allActivities}
                setAllActivities={setAllActivities}/>
            </div>)
            :
            (<div></div>)
          }
          {allActivities.map(act=> {
            return (
              <div className="activityContainer" key={act.id}>
                <div className="activityBody">
                  <div className="activityHeader">
                    <div className="activityDescription">
                      <div className='innerbox'>  
                        <div className='innerboxText' style={{fontWeight:"bolder", color:"black"}}
                            onClick={() => {
                            activityID(act.id)
                            setSelectedAct(act.id)
                            }}>
                          <Link to={`/activities/${act.id}`} className="activityLink">
                            Activity: {act.name}
                          </Link>
                        </div>
                        <div className='innerboxText'>{act.description}</div>
                      </div>
                    </div>  
                  </div>  
                </div>    
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
export default Activities;