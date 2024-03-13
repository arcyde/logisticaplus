import { useNavigate } from 'react-router-dom'

import ClientForm from '../client/ClientForm'

import styles from './NewClient.module.css'

function NewClient() {
  const navigate = useNavigate()

  function createPost(client) {
    fetch('http://localhost:3500/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/clients', {state: { message: 'Cliente cadastrado com sucesso!' }})
      })
  }

  return (
    <div className={styles.newclient_container}>
      <h1>Cadastrar Cliente</h1>
      <p>Cadastro de clientes simples</p>
      <ClientForm handleSubmit={createPost} btnText="Cadastrar Cliente" />
    </div>
  )
}

export default NewClient