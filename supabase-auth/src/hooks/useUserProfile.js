import { useGetSession } from './useGetSession';

export const useUserProfile = () => {
  const { data } = useGetSession();

  return { userId: data?.user?.id };
};
