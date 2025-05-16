import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router';

import { Register } from './pages/Register/Register.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Login } from './pages/Login/Login.jsx';
import { AdminDashboard } from './pages/AdminDashboard/AdminDashboard.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/admin-dashboard',
        element: (
          <PrivateRoute requiredRole='admin'>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
