import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
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
import DevDashboard from "./pages/DevDashboard";
import JobsPage from "./pages/JobsPage";
import DevCommunity from "./pages/DevCommunity";

function App() {
	const isLoggedIn = useSelector(store => store.isLoggedIn);
	return (
		<div className="App">
			<GlobalStyles />
			<ToastContainer position="top-center" autoClose={5000} />
			<Switch>
				<Route path="/join" exact>
					{!isLoggedIn ? <SignupPage /> : <Redirect to="/" />}
				</Route>
				<Route path="/login" exact>
					{!isLoggedIn ? <LoginPage /> : <Redirect to="/" />}
				</Route>
				<Route path="/profile" exact>
					{isLoggedIn ? <CreateProfile /> : <Redirect to="/" />}
				</Route>
				<Route path="/dashboard" exact>
					{isLoggedIn ? <DevDashboard /> : <Redirect to="/login" />}
				</Route>
				<Route path="/jobs" exact>
					{isLoggedIn ? <JobsPage /> : <Redirect to="/login" />}
				</Route>
				<Route path="/community" exact>
					{isLoggedIn ? <DevCommunity /> : <Redirect to="/login" />}
				</Route>
				<Route path="/" exact>
					<LandingPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
