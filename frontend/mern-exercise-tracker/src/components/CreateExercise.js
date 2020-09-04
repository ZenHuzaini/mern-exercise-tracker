import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateExercise = () => {
  const [dataExercise, setDataExcercise] = useState({
    username: "",
    description: "",
    date: "",
    duration: "",
    users: [],
  });

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    console.log("get data hre 1 ", data.data);
    if (data.data !== undefined && data.data.length !== 0) {
      setDataExcercise({
        users: data.data.map(({ username }) => username),
        username: data.data[0].username,
      });
    }
    console.log("get data hre ", data.data);
  };

  const onChangeUsername = (e) => {
    setDataExcercise({
      ...dataExercise,
      username: e.target.value,
    });
  };

  const onChangeDescription = (e) => {
    setDataExcercise({
      ...dataExercise,
      description: e.target.value,
    });
  };

  const onChangeDate = (e) => {
    setDataExcercise({
      ...dataExercise,
      date: e.target.value,
    });
  };

  const onChangeDuration = (e) => {
    setDataExcercise({
      ...dataExercise,
      duration: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // setDataExcercise();
    console.log(dataExercise);
    const result = await axios.post(
      "http://localhost:5000/api/exercises",
      dataExercise
    );
    console.log("get data hre ", result.data);
    // window.location = "/";
  };

  return (
    <div className="createExercise">
      <p>You are on the create Exercises component!</p>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <select
            // ref={useRef("userInput")}
            required
            className="form-control"
            value={dataExercise.username}
            onChange={onChangeUsername}
          >
            {dataExercise.users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            onChange={onChangeDescription}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input onChange={onChangeDate} type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            onChange={onChangeDuration}
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
