import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
  .email('Insira um e-mail válido')
  .required('Informe seu e-mail'),
  password: Yup.string().required('Insira sua senha'),
})

export default function SignIn() {

  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <>
      <img src={ logo } alt="Logo GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">
          Acessar
        </button>

        <Link to="/register" >Criar conta gratuita</Link>
      </Form>
    </>
  );
}
