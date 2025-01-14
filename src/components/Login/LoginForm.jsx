import { func } from 'prop-types';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Erro from '../../Helper/Erro'
import { UserContext } from '../../UserContext';
import styles from '../../Styles/LoginForm.module.css'
import stylesBtn from '../../Styles/Button.module.css'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button> }
        <Erro />
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Esqueceu a Senha?</Link>
      <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site</p>
      </div>
      <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm
