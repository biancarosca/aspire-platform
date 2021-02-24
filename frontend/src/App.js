import React from "react";
import { Route, Switch } from "react-router-dom";
//packages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import GlobalStyles from "./components/GlobalStyles";
//pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateProfile from "./pages/CreateProfile";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<ToastContainer position="top-center" autoClose={5000} />
			<Switch>
				<Route path="/join" exact>
					<SignupPage />
				</Route>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<Route path="/profile" exact>
					<CreateProfile />
				</Route>
				<Route path="/" exact>
					<LandingPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
