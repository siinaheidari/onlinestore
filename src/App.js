import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router , Route} from "react-router-dom";
import Home from "./components/Homepage/home";
import Register from "./components/login/register/register";
import Login from "./components/login/login/login";
import React from "react";
import Footer from "./components/footer/footer";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/login"} exact component={Login}/>
                <Route path={"/register"} exact component={Register}/>
                <Footer/>
            </div>
        </Router>

    );
}

export default App;
