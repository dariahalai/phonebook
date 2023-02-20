import { Routes, Route} from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { PublicRoute } from './authRoutes/PublicRoute';
import { PrivateRoute } from './authRoutes/PrivateRoute';
import HomePage from './pages/HomePage';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route path="" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>  
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

// email
// :
// "intercom.kh@gmail.com"
// name
// :
// "DashaA"
// password
// :
// "DDDddd5555GGG"
