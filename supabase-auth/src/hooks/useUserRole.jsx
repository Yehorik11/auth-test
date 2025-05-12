import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const useUserRole = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        navigate('/login');
        return;
      }

      const userId = session.user.id;
      const { data: roles, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (roleError) {
        console.error(roleError.message);
        navigate('/dashboard');
        return;
      }

      setRole(roles?.role || 'user');
      setLoading(false);
    };

    checkUserRole();
  }, [navigate]);

  return { role, loading };
};
