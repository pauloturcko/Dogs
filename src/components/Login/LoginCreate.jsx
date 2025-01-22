import React, { useContext } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Erro from '../../Helper/Erro'
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'
import useFetch from '../../Hooks/useFetch'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm(null)
  const password = useForm();

  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...username} />
        <Input label="Senha" type="password" name="password" {...username} />
        {loading ? (<Button disabled>Cadastrando...</Button>) : (<Button>Cadastrar</Button>)}
        <Erro error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
