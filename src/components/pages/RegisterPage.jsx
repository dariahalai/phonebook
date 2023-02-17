import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authRegisterThunk } from 'redux/auth/auth.thunk';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await  dispatch(authRegisterThunk(values)).unwrap();
      navigate('/contacts',{replace:true})
      // add toast
    } catch (error) {
      // add toast
    }
  };
  return (
    <>
      <h2>Let's Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </label>
        <button>Sign Up</button>
      </form>
    </>
  );
};
export default RegisterPage;
