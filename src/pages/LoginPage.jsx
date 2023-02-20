import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunk';
import { FormLabel, Input, Button, Stack, Heading } from '@chakra-ui/react';

const initialState = {
  email: '',
  password: '',
};
const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authLoginThunk(values));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading mt="50px" textAlign="center">
        Log In
      </Heading>
      <Stack mt="30px" w="400px" mr="auto" ml="auto">
        <FormLabel>
          Email
          <Input
            minW="400px"
            pl="1.5rem"
            _focusVisible={{
              borderColor: 'red.200',
              boxShadow: '0px 1px 0px 0px #fbd38d',
            }}
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </FormLabel>
        <FormLabel>
          Password
          <Input
            minW="400px"
            pl="1.5rem"
            _focusVisible={{
              borderColor: 'red.200',
              boxShadow: '0px 1px 0px 0px #fbd38d',
            }}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </FormLabel>
      </Stack>
      <Button
        type="submit"
        ml="auto"
        mr="auto"
        display="flex"
        size="md"
        minW="400px"
        colorScheme="red"
        mt={5}
      >
        Log In
      </Button>
    </form>
  );

};
export default LoginPage;
