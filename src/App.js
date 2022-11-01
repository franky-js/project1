import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "./Pages/Auth";
import Reg from "./Pages/Reg";
import Result from "./Pages/Result";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/reg" element={<Reg/>}/>
                <Route path="/result" element={<Result/>}/>
                <Route exact path="/" element={<Auth/>}/>
            </Routes>
        </Router>
    );
}

export default App;
