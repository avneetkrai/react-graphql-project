import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import NavBar from './components/NavBar';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile/> */}
      {/* <CreateQuote /> */}
      {element}
    </div>
  );
}

export default App;
