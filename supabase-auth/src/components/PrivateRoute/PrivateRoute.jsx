import { useUserRole } from '../../hooks/useUserRole';
import { Dashboard } from '../../pages/Dashboard/Dashboard';

export const PrivateRoute = ({ children, requiredRole = null }) => {
  const { role, loading } = useUserRole();

  if (loading) return <Dashboard />;

  if (requiredRole && role !== requiredRole) {
    return <div>Access Denied</div>;
  }

  return children;
};
