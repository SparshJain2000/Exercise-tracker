import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/jquery.min.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
function App() {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact component={ExercisesList} />
            <Route path='/edit/:id' exact component={EditExercise} />
            <Route path='/create' exact component={CreateExercise} />
            <Route path='/user' exact component={CreateUser} />
        </Router>
    );
}

export default App;
