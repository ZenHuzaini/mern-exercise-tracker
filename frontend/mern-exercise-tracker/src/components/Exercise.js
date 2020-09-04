import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = ({ exercise }) => {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + exercise._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            exercise.deleteExercise(exercise._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Exercise;
