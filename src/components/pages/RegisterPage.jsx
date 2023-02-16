import { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    //   dispatch(addContactsThunk({ name, phone }));
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>Let's Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
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
            value={email}
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
            value={password}
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
