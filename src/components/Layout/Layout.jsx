import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Container } from '@chakra-ui/react';
import { selectAuthToken } from 'redux/auth/auth.selectors';

import Navigation from 'components/Navigation';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';

const Layout = () => {
  const token = useSelector(selectAuthToken);
  return (
    <>
      <Box
        as="header"
        bg={'red.50'}
        borderBottom={`1px solid`}
        borderColor={'gray.100'}
        fontSize={20}
        mb={5}
        boxShadow={'2px 2px 4px 1px #d1c9ba'}
      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="4xl"
          p={2}
        >
          <Navigation />
          {!token ? <AuthNavigation /> : <UserMenu />}
        </Container>
      </Box>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
