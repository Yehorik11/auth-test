import { Outlet } from 'react-router';

import { Header } from './components/Header/Header';

import { Divider } from './components/Divider/Divider';

import './index.css';

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
