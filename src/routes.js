import CreateQuote from './components/CreateQuote';
import Home from './components/Home';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/create',
    element: <CreateQuote />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];
