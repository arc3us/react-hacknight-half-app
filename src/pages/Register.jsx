import { useState } from "react";
import PropTypes from "prop-types";
import { FaRotate, FaMeteor } from "react-icons/fa6";
import Loader from "../components/Loader";
import { v4 as uuid } from "uuid";
import NoteService from "../services/ParticipantService";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [github, setGithub] = useState("");
  const [loading, setLoading] = useState();

  const handleFullName = (e) => setFullName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleGithub = (e) => setGithub(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (fullName && email && country && github) {
      try {
        setLoading(true);
        const newParticipant = {
          id: uuid(),
          fullName: fullName,
          email: email,
          country: country,
          gitHubLink: github,
        };

        await NoteService.register(newParticipant);
        window.alert("Participant registered successfully");
      } catch (error) {
        window.alert("Error registering participant");
      } finally {
        setLoading(false);
      }
    } else {
      window.alert("Please fill all the fields");
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setFullName("");
    setEmail("");
    setCountry("");
    setGithub("");
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={github}
            onChange={handleGithub}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="button" onClick={handleReset}>
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
