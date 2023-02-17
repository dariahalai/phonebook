import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLoginThunk } from 'redux/auth/auth.thunk';

const initialState = {
  email: '',
  password: '',
};
const LoginPage = () => {
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
      await dispatch(authLoginThunk(values)).unwrap();
      navigate('/contacts',{replace:true})
      // add toast
    } catch (error) {
      // add toast
    }
  };

  return (
    <>
      <h2>Let's Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
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
        <button>Log In</button>
      </form>
    </>
  );
};
export default LoginPage;
