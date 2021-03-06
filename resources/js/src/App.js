import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import Header from './Header'

import NavHeader from "./components/Header";
const HomePage = lazy(() => import("./components/Home"));
const RegisterPage = lazy(() => import("./components/auth/Register"));
const Login = lazy(() => import("./components/auth/Login"));
// import RegisterPage from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import HomePage from "./components/Home";

class App extends Component {
    render() {
        const loadstyle = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        };
        return (
            <BrowserRouter>
                <NavHeader />
                <Suspense
                    // fallback={<div>Загрузка...</div>}
                    fallback={
                        <img
                            className="d-flex justify-content-center"
                            style={loadstyle}
                            src="https://i2.wp.com/media.boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif?zoom=2&w=970"
                        ></img>
                    }
                >
                    <div className="container">
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/register">
                            <RegisterPage />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </div>
                </Suspense>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
