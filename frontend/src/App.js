import React from "react";
import LandingPage from "./pages/LandingPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Switch>
				<Route path="/join" exact>
					<SignupPage />
				</Route>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<Route path="/" exact>
					<LandingPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
