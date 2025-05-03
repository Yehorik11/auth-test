import { Outlet } from 'react-router';

import { Header } from './components/Header/Header';

import './index.css';
import { Divider } from './components/Divider/Divider';

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Outlet />
    </div>
  );
}

export default App;
