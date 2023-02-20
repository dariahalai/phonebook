import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { Link, Stack } from '@chakra-ui/react';

const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <nav>
      <Stack as="ul"  direction="raw" spacing={1} >
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            borderRadius={'12px'}
            to={'/'}
            _hover={{ bg: 'red.400', color: 'white' }}
            _activeLink={{ bg: 'red.500', color: 'white' }}
          >
            Home
          </Link>
        </li>
        {token && (
          <li>
            <Link
              as={NavLink}
              fontSize="lg"
              fontWeight='500'
              p={2}
              mr={1}
              borderRadius={'12px'}
              to={'contacts'}
              _hover={{ bg: 'red.400', color: 'white' }}
              _activeLink={{ bg: 'red.500', color: 'white' }}
            >
              Contacts
            </Link>
          </li>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
