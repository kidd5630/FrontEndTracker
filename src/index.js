import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines
} from './components';

const App = () => {
	const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);


	return <Router>
	<Header />
	<main>
		<Switch>
			<Route exact path="/">
				Home
			</Route>
			<Route path="/routines">
				<Routines baseURL={baseURL} />				
			</Route>
			
			
		</Switch>
	</main>
	<Footer />
</Router>
};

ReactDOM.render(<App />, document.getElementById('root'));