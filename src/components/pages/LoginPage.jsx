import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
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
    setPassword('');
  };

  return (
    <>
      <h2>Let's Log In</h2>
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
        <button>Log In</button>
      </form>
    </>
  );
};
export default LoginPage;
