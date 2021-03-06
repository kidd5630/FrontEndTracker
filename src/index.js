import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
	Header,
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
    const [selectedAct, setSelectedAct] = useState(getActId());
	const [featuredName, setFeaturedName] = useState([]);
    const [featuredCreator, setFeaturedCreator] = useState([]);
	const [activityName, setActivityName] = useState("")
	const [activityDescript, setActivityDescript] = useState("")
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
		fetchUsersRoutines(myUsername, userToken)
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
			<div className="app"
			style={{backgroundColor:"rgb(3, 58, 141)"}}>	
				<Header 
					userToken={userToken}
					setUserToken={setUserToken}
					setMyUsername={setMyUsername}/>	

				{userToken
				?
				(<div className="backdrop">
					<Switch>	
						<Route exact path ="/">
							<Home 
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route exact path ="/home">
							<Home 
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route exact path ="/myroutines">
							<Routineslist
								userToken={userToken}
								myUsername={myUsername}
								pageRoutines={usersRoutines}
								setallroutines={setallroutines}
								allRoutines={allroutines}
								usersRoutines={usersRoutines}
								setusersRoutines={setusersRoutines}
								allActivities={allActivities} />
						</Route>
						<Route path ="/routines">
							<Routineslist
								pageRoutines={allroutines} />
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
								setFeaturedCreator={setFeaturedCreator} />
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
								activityName={activityName}
								activityDescript={activityDescript}
								setActivityName={setActivityName}
								setActivityDescript={setActivityDescript} /> 
                        </Route>
						<Route path="/myroutines/new">
                            <CreateRoutine
								userToken={userToken} 
								allroutines={allroutines} 
								setallroutines = {setallroutines}
								usersRoutines= {usersRoutines}
								setusersRoutines= {setusersRoutines}
								myUsername ={myUsername} />
                        </Route>
					</Switch>
				</div>)	
				: 
				(<div className="backdrop" >
					<Switch>
						<Route exact path ="/">
							<Home 
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route exact path ="/home">
							<Home 
								userToken={userToken}
								myUsername={myUsername} />
						</Route>
						<Route path ="/routines">
							<Routineslist
								userToken={userToken}
								myUsername={myUsername}
								allroutines={allroutines}
								pageRoutines={allroutines} 
								pageRoutines={allroutines}
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
								setFeaturedCreator={setFeaturedCreator} />
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
								activityName={activityName}
								activityDescript={activityDescript}
								setActivityName={setActivityName}
								setActivityDescript={setActivityDescript} /> 
                        </Route>
						<Route path="/register">
							<Register 
								setUserToken={setUserToken}
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword} />
						</Route>
						<Route path="/login">
							<Login 
								setusersRoutines={setusersRoutines}
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword}
								setUserToken={setUserToken} />
						</Route>
						<Route path="/myroutines/new">
                            <CreateRoutine userToken={userToken}/>
                        </Route>
					</Switch>
				</div>)
				}
			</div>
		</Router>
	)
}
ReactDOM.render(<App />, document.getElementById('root'));