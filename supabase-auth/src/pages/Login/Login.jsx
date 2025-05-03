import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../../supabaseClient';
import { Button } from '../../components/Button/Button';
import { SignInWithGoogle } from '../../components/SignInWithGoogle/SignInWithGoogle';

import styles from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log('Error:', error.message);
    } else {
      console.log('Success:', data);
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.label_input}>
          <label className={styles.label}>Type email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className={styles.input}
          />
        </div>

        <div className={styles.label_input}>
          <label className={styles.label}>Type password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            autoComplete='on'
            className={styles.input}
          />
        </div>

        <Button type='submit'>Sign In</Button>
      </form>

      <SignInWithGoogle />
    </div>
  );
};
