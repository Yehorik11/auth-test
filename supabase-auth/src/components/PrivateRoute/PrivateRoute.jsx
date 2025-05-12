import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, requiredRole }) => {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        supabase
          .from('user_roles')
          .select('roles(name)')
          .eq('user_id', session.user.id)
          .single()
          .then(({ data, error }) => {
            if (error) {
              console.log('Error fetching role:', error.message);
            } else {
              setRole(data.roles.name);
            }
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <div>{role}</div>;

  if (!session) {
    return <Navigate to='/login' />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to='/' />;
  }

  return children;
};
