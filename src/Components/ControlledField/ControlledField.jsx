import React, { useState } from "react";

const ControlledField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 8) {
      setError("password must be 8 characters or longer");
    } else {
      setError("");
    }
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 8) {
      setError("password must be 8 characters or longer");
    } else {
      setError("");
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setname(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          onChange={handlePhoneNumber}
          defaultValue={name}
          placeholder="number"
          required
        />
        <br />
        <input
          type="email"
          name="name"
          onChange={handleEmailChange}
          defaultValue={email}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="name"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="submit" />
        <p style={{ color: "red" }}>
          <small>{error}</small>
        </p>
      </form>
    </div>
  );
};

export default ControlledField;
