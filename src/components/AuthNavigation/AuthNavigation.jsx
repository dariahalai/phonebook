import { NavLink } from 'react-router-dom';
import { Link, Stack } from '@chakra-ui/react';

const AuthNavigation = () => {
  return (
    <nav>
      <Stack as="ul" direction="raw" spacing={1} p={1}>
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'login'}
            _hover={{ bg: 'red.400', color: 'white' }}
            _activeLink={{ bg: 'red.500', color: 'white' }}
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'register'}
            _hover={{ bg: 'red.400', color: 'white' }}
            _activeLink={{ bg: 'red.500', color: 'white' }}
          >
            Sign In
          </Link>
        </li>
      </Stack>
    </nav>
  );
};

export default AuthNavigation;
