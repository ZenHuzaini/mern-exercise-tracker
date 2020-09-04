import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
  const [dataUser, setDataUser] = useState({
    username: "",
  });

  const onChangeUsername = (e) => {
    setDataUser({
      username: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post(
      "http://localhost:5000/api/users",
      dataUser
    );
    console.log(result.data);

    setDataUser({ username: "" });
  };

  return (
    <div>
      <p>You are on the create User component!</p>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            value={dataUser.username}
            onChange={onChangeUsername}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
