import React from "react";
import LandingPage from "./pages/LandingPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route,Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Switch>
				<Route path="/join" exact>
					<h1>join</h1>
				</Route>
				<Route path="/login" exact>
					<h1>login</h1>
				</Route>
				<Route path="/" exact>
					<LandingPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
