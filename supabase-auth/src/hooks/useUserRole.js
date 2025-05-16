import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';
import { useUserProfile } from './useUserProfile';

export const useUserRole = () => {
  const { userId } = useUserProfile();

  const { data } = useQuery({
    queryKey: ['userRole'],
    enabled: !!userId,
    queryFn: async () => {
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      return roles;
    },
  });
  console.log(data);
  return {};
};
