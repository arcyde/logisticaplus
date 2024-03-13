import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ModalButton from '../layout/ModalButton'
import ClientCard from '../client/ClientCard'
import Message from '../layout/Message'

import styles from './Clients.module.css'

function Clients() {
  const [clients, setClients] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [clientMessage, setClientMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    // Para ver o loading
    fetch('http://localhost:3500/clientes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setClients(data)
            setRemoveLoading(true)
          })

  }, [])

  function removeClient(id) {
    fetch(`http://localhost:3500/clientes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(() => {
        setClients(clients.filter((client) => client.id !== id));
        setClientMessage('Cliente removido com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao deletar cliente', error);
    });
}

  return (
    <div className={styles.client_container}>
      <div className={styles.title_container}>
        <h1>Meus Clientes</h1>
        <ModalButton modalTexto={"Rota de entregas"} texto={"Visualizar rotas"} />
        <LinkButton to="/newclient" text="Cadastrar cliente" />
      </div>
      {message && <Message type="success" msg={message} />}
      {clientMessage && <Message type="success" msg={clientMessage} />}
      <Container customClass="start">
        {clients.length > 0 &&
          clients.map((clients) => (
            <ClientCard
              id={clients.id}
              nome={clients.nome}
              email={clients.email}
              telefone={clients.telefone}
              locatex={clients.locatex}
              locatey={clients.locatey}
              key={clients.id}
              handleRemove={removeClient}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && clients.length === 0 &&
            <p>Não há clientes cadastrados!</p>
          }
      </Container>
    </div>
  )
}

export default Clients