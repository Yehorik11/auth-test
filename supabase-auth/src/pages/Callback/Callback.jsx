import { useEffect } from 'react';
import { useUserRole } from '../../hooks/useUserRole';
import { useNavigate } from 'react-router-dom';
import { AdminDashboard } from '../AdminDashboard/AdminDashboard';

export const Callback = () => {
  const { role, loading } = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/dashboard');
    }
  }, [role, loading, navigate]);

  return <AdminDashboard />;
};
