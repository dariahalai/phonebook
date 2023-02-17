import { Routes, Route, Navigate } from 'react-router-dom';
import {  lazy } from 'react';
import Layout from './Layout/Layout';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import ContactsPage from './pages/ContactsPage';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
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