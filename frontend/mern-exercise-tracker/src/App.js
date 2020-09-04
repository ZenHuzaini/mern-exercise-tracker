import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  // const [dataExercise, setDataExcercise] = useState({
  //   username: "s",
  //   description: "s",
  //   date: "s",
  //   duration: "s",
  //   users: [],
  // });

  // console.log("get here ", dataExercise);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route
          // dataExercise={dataExercise}
          // setDataExcercise={setDataExcercise}
          path="/create"
          component={CreateExercise}
        />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
