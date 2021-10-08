import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,
	Register,
	Home,
	Login,
	Activities,
	IndividualActivity
} from './components';
import {
    getCurrentUserToken,
    getCurrentUsername
} from './auth';
import { fetchAllActivities,
		BASE_URL
 } from './api';

const App = () => {
	
	const [allActivities, setAllActivities]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
    const [myPassword, setMyPassword] = useState('');
    // const [postDeleted, setPostDeleted] = useState(0);
    // const [myPostsList, setMyPostsList] = useState([]);
    const [selectedAct, setSelectedAct] = useState(getActId());
	


	useEffect(() => {
        fetchAllActivities()
          .then((allActivities) => {
            setAllActivities(allActivities);
          })
          .catch(error => console.error(error))
    });
	
	function activityID(act_ID) {
        localStorage.removeItem('actId');
        localStorage.setItem('actId', JSON.stringify(act_ID));
      }
	  function getActId() {
        const selectedActID = JSON.parse(localStorage.getItem('actId'));
        return selectedActID;
    }


	return (
		<Router>
			<div className="app">
				
			<Header 
				userToken={userToken}
				setUserToken={setUserToken}
				setMyUsername={setMyUsername}/>	


				{userToken
				?
				(<div>
					<Switch>	
						<Route exact path ="/home">
							<Home 
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route path ="/myroutines">
							<Routines
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route exact path ="/activities">
							<Activities 
								userToken={userToken}
								myUsername={myUsername}
								allActivities={allActivities}
								setAllActivities={setAllActivities}
								selectedAct={selectedAct}
								setSelectedAct={setSelectedAct}
								activityID={activityID}/>
						</Route>
						<Route path="/activities/:id">
                            <IndividualActivity 
                                myUsername={myUsername}
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                userToken={userToken}
                                selectedAct={selectedAct}
                                // deleteItem={deleteItem}
                            /> 
                        </Route>
					</Switch>
				</div>)	
				: 
				(<div>
					<Switch>
					<Route path ="/routines">
							<Routines
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route exact path ="/activities">
							<Activities 
								serToken={userToken}
								myUsername={myUsername}
								allActivities={allActivities}
								setAllActivities={setAllActivities}
								selectedAct={selectedAct}
								setSelectedAct={setSelectedAct}
								activityID={activityID}/>
						</Route>
						<Route path="/activities/:id">
                            <IndividualActivity
                                myUsername={myUsername}
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                userToken={userToken}
                                selectedAct={selectedAct}
                                // deleteItem={deleteItem}
                            /> 
                        </Route>
						<Route path="/register">
							<Register 
								setUserToken={setUserToken}
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword}
								/>
							</Route>
						<Route path="/login">
							<Login 
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword}
								setUserToken={setUserToken}
							/>
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						
					</Switch>
				<Footer />
				</div>)
				}
				
				
				
			
			</div>
	</Router>
	)

}

ReactDOM.render(<App />, document.getElementById('root'));