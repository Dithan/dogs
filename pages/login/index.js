import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import useForm from '../../Hooks/useForm';

const index = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  };

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
        <Button>Entrar</Button>
      </form>
      <Link href="login/criar">Cadastro</Link>
    </>
  );
};

export default index;
