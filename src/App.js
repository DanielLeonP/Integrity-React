import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login'
          element={
            <LoginPage />
          } />
        <Route path='/*'
          element={
            <Navigate to='/login' />
          }
        />
        <Route path='/MainPage'
          element={
            <MainPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
