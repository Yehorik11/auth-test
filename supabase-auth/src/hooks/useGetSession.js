import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';

export const useGetSession = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      return session;
    },
  });

  return { ...rest, data };
};
