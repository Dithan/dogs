import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useRouter } from 'next/router';

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    router.push('/login');
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok)
        throw new Error(`Erro: Usuário ou Senha incorretos. Tente novamente.`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      router.push('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token invalido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
