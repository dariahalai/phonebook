import { getUserThunk } from 'redux/user/user.thunk';
import { selectUser } from 'redux/user/user.selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { authLogOutThunk } from 'redux/auth/auth.thunk';

import { Button, Container, Icon ,Text} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk());
    }
  }, [token, dispatch]);

  return (
    <Container
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      {user && (
        <>
          <Text fontSize='lg' fontWeight='500'>Hello, {user.name}</Text> 
          <Icon  ml={2} boxSize={5} as={FaUser} />
        </>
      )}
      <Button
        type="button"
        colorScheme="red"
        size="md"
        ml={5}
        onClick={() => dispatch(authLogOutThunk())}
      >
        Log Out
      </Button>
    </Container>
  );
};

export default UserMenu;
