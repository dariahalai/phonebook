import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
