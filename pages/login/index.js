import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UseContext';

const index = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  const Login = () => {
    const { login } = React.useContext(UserContext);
    if (login === true) {
      router.push('/conta');
    }
  };

  Login();

  return (
    <>
      <Head>
        <title>Dogs | Entre ou Cadastre-se</title>
        <meta content="Dogs - Rede social para cachorros" />
      </Head>

      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link href="login/criar">Cadastro</Link>
    </>
  );
};

export default index;
