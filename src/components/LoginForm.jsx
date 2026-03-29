import { useState } from "react";
import "./App.css";

function App() {

  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are empty
    if (!username && !password) {
      alert("Gmail and Password fields cannot be empty!");
      return;
    }

    if (step === 1) {
      setStep(2);
    } else {
      const formData = {
        Username: username,
        Password: password,
        Name: name,
        Surname: surname,
        Age: age,
        DOB: dob,
        Email: email,
        Phone: phone
      };
      
      console.log("Form Data:", formData);
      alert(
        "Username: " + username +
        " Password: " + password +
        " Name: " + name +
        " Surname: " + surname +
        " Age: " + age +
        " DOB: " + dob +
        " Email: " + email +
        " Phone: " + phone
      );
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>

        {step === 1 && (
          <>
            <h2>Login Form</h2>

            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
          </>
        )}

        {step === 2 && (
          <>
            <h2>User Details</h2>

            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label>Surname</label>
            <input
              type="text"
              placeholder="Enter Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <br />
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </>
        )}
      <br />
        <button type="submit">
          {step === 1 ? "Next" : "Submit"}
        </button>
        <br />
      </form>
    </div>
  );
}

export default App;