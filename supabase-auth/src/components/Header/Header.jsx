import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import styles from './Header.module.css';
import { supabase } from '../../supabaseClient';

export const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleClick = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to={'/'} className={styles.link}>
          <span className={styles.logo}>Auth With Supabase</span>
        </Link>
        <nav>
          <ul className={styles.list}>
            {!user ? (
              <li>
                <Link to={'/login'} className={styles.link}>
                  Sign In
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={'/'} onClick={handleClick} className={styles.link}>
                    Log Out
                  </Link>
                </li>

                <li>
                  <Link to={'/dashboard'} className={styles.link}>
                    Dashboard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
