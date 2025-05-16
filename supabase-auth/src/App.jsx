import { Outlet } from 'react-router';

import { Header } from './components/Header/Header';

import { Divider } from './components/Divider/Divider';

import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Divider />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
