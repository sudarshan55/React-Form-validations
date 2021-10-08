import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorObj, setErrorObj] = useState([]);

  //handlers
  function validate() {
    let tempObj = [];
    if (!username) {
      tempObj.push("username");
    }
    if (!password) {
      tempObj.push("password");
    }
    setErrorObj(tempObj);
    if (tempObj.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  function removeValidation(_key) {
    const filteredArray = errorObj.filter((element) => element !== _key);
    setErrorObj(filteredArray);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    removeValidation("username");
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    removeValidation("password");
  }

  function handleSubmit(e) {
    e.preventDefault();
    let validationResponse = validate();
    if (!validationResponse) {
      return;
    }
    console.log("submitted");
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username </label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <span
          style={{
            color: "red",
            position: "absolute",
            display: errorObj.includes("username") ? "block" : "none",
          }}
        >
          * This field is required{" "}
        </span>
        <br />
        <br />
        <label>Password </label>
        <input
          type="text"
          placeholder="Enter Username"
          value={password}
          onChange={handlePasswordChange}
        />
        <span
          style={{
            color: "red",
            position: "absolute",
            display: errorObj.includes("password") ? "block" : "none",
          }}
        >
          * This field is required{" "}
        </span>
        <br />
        <br />

        <button> Signup </button>
      </form>
    </div>
  );
}

export default Signup;
