import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { supabase } from '../../supabaseClient';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log(`Error: ${error.message}`);
    } else {
      console.log('Confirm your email');
      console.log('Response from Supabase:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Type email</label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />

      <label>Type password</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />

      <Button type='submit'>Register</Button>
    </form>
  );
};
