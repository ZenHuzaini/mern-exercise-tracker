import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import { Link } from "react-router-dom";
import axios from "axios";

const ExerciseList = () => {
  const [dataExercise, setDataExcercise] = useState({ exercises: [] });

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:5000/api/exercises");
    console.log("in mount before ", dataExercise);

    console.log("get data in mount ", data.data);
    // setDataExcercise({ exercises: [{ rfg: "ewf" }] });

    console.log("in mount ", dataExercise);
  };

  const deleteExercise = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:5000/api/exercises/${id}`
    );
    console.log(data.message);
    setDataExcercise({
      exercises: dataExercise.filter((data) => data._id !== id),
    });
  };

  const exerciseList = async () => {
    console.log("exeecise list ", dataExercise);
    // console.log(dataExercise.exercises); //undefined
    return dataExercise.map((exercises) => {
      return (
        <Exercise
          exercise={exercises}
          deleteExercise={deleteExercise}
          key={exercises._id}
        />
      );
    });
  };

  const getSomething = async () => {
    const { data } = await axios.get("http://localhost:5000/api/exercises");
    console.log("in mount before ", dataExercise);
    const newdata = data.data;
    console.log("get data in mount ", data.data);
    setDataExcercise({ exercises: newdata });

    console.log("in mount ", dataExercise);
  };

  return (
    <div>
      <p>You are on the Exercises List component!</p>
      <div>
        <h3 onClick={getSomething}>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody>{exerciseList}</tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ExerciseList;
