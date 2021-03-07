import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
//material-ui
import {
	unstable_createMuiStrictModeTheme,
	ThemeProvider,
} from "@material-ui/core/styles"; //fixes error originating from material-ui

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const theme = unstable_createMuiStrictModeTheme({
	palette: {
		primary: { main: "#413feb" },
	},
});

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<CookiesProvider>
						<App />
					</CookiesProvider>
				</BrowserRouter>
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
