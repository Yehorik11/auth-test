import { supabase } from '../../supabaseClient';
import styles from './SignInWithGoogle.module.css';

export const SignInWithGoogle = () => {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/callback',
      },
    });

    if (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className={styles.button}>
      Or Sign In With Google
    </button>
  );
};
