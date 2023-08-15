import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';

const Register = () => {
  const [fullName, setFullName] = useState('');

  const handleFullName = e => setFullName(e.target.value);

  const handleSubmit = async () => {
    console.log('handleSubmit');
  };

  return (
    <>
      {false && <Loader />}
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
            type="text"
            className="form-control mb-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="submit">
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
