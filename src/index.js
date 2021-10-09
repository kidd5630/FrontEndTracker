import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,
	Routineslist,
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
		BASE_URL,
		fetchAllRoutines,
		fetchUsersRoutines
 } from './api';
import CreateRoutine from './components/Routine/CreateRoutine';

const App = () => {
	
	const [allActivities, setAllActivities]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
    const [myPassword, setMyPassword] = useState('');
	const [allroutines, setallroutines] = useState([])
	const [usersRoutines, setusersRoutines] =useState([])
    // const [postDeleted, setPostDeleted] = useState(0);
    // const [myPostsList, setMyPostsList] = useState([]);
    const [selectedAct, setSelectedAct] = useState(getActId());
	const [featuredName, setFeaturedName] = useState([]);
    const [featuredCreator, setFeaturedCreator] = useState([]);
    // const [isError, setIsError] = useState(false)
	


	useEffect(() => {
        fetchAllActivities()
          .then((allActivities) => {
            setAllActivities(allActivities);
          })
          .catch(error => console.error(error))
		fetchAllRoutines()
		.then((routines)=>{
			setallroutines(routines)
		})
		.catch((error)=>{console.error(error)})
		fetchUsersRoutines()
		.then((routine)=> {
			setusersRoutines(routine)
		})
		.catch((error)=>{console.error(error)})
    }, []);
	
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
						<Route exact path ="/myroutines">
							<Routineslist
								userToken={userToken}
								myUsername={myUsername}
								allroutines={usersRoutines} />
						</Route>
						<Route path ="/routines">
							<Routineslist
								allroutines={allroutines} />
						</Route>
						<Route exact path ="/activities">
							<Activities 
								userToken={userToken}
								myUsername={myUsername}
								allActivities={allActivities}
								setAllActivities={setAllActivities}
								selectedAct={selectedAct}
								setSelectedAct={setSelectedAct}
								activityID={activityID}
								featuredName={featuredName} 
								setFeaturedName={setFeaturedName}
								featuredCreator={featuredCreator}
								setFeaturedCreator={setFeaturedCreator}
								// isError={isError}
								// setIsError={setIsError}
								/>
						</Route>
						<Route path="/activities/:id">
                            <IndividualActivity 
                                myUsername={myUsername}
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                userToken={userToken}
                                selectedAct={selectedAct}
								featuredName={featuredName} 
								setFeaturedName={setFeaturedName}
								featuredCreator={featuredCreator}
								setFeaturedCreator={setFeaturedCreator}
								// isError={isError}
								// setIsError={setIsError}
                            /> 
                        </Route>
						<Route path="/myroutines/new">
                            <CreateRoutine/>
                        </Route>
					</Switch>
				</div>)	
				: 
				(<div>
					<Switch>
					<Route path ="/routines">
							<Routineslist
								userToken={userToken}
								myUsername={myUsername}
								allroutines={allroutines} />
						</Route>
						<Route exact path ="/activities">
							<Activities 
								serToken={userToken}
								myUsername={myUsername}
								allActivities={allActivities}
								setAllActivities={setAllActivities}
								selectedAct={selectedAct}
								setSelectedAct={setSelectedAct}
								activityID={activityID}
								featuredName={featuredName} 
								setFeaturedName={setFeaturedName}
								featuredCreator={featuredCreator}
								setFeaturedCreator={setFeaturedCreator}
								// isError={isError}
								// setIsError={setIsError}
								/>
						</Route>
						<Route path="/activities/:id">
                            <IndividualActivity
                                myUsername={myUsername}
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                userToken={userToken}
                                selectedAct={selectedAct}
								featuredName={featuredName} 
								setFeaturedName={setFeaturedName}
								featuredCreator={featuredCreator}
								setFeaturedCreator={setFeaturedCreator}
								// isError={isError}
								// setIsError={setIsError}
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