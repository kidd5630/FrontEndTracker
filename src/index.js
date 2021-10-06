import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	// Routines,
	Register,
	Home,
	Login
} from './components';
import {
    getCurrentUserToken,
    getCurrentUsername
} from './auth';

const App = () => {
	
	// const [allPosts, setAllPosts]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
    const [myPassword, setMyPassword] = useState('');
    // const [postDeleted, setPostDeleted] = useState(0);
    // const [myPostsList, setMyPostsList] = useState([]);
    // const [selectedPost, setSelectedPost] = useState(getPostId());
	
	return (
		<Router>
			<div className="app">
				
				<Header 
				userToken={userToken}
				setUserToken={setUserToken}
				setMyUsername={setMyUsername}/>

				{userToken
				?
					<Home 
						userToken={userToken}
						myUsername={myUsername} />
					
				:
				(<>
				<div>
					<Switch>
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
				</div>
				</>)
				}
				
				
				
			
			</div>
	</Router>
	)

}

ReactDOM.render(<App />, document.getElementById('root'));