import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Client.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ClientForm from '../client/ClientForm'
import Message from '../layout/Message'

function Client() {
  let { id } = useParams()
  const [client, setClient] = useState([])
  const [showClientForm, setShowClientForm] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  useEffect(() => {
    fetch(`http://localhost:3500/clientes/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setClient(data[0])
          })
  }, [id])

  function editPost(client) {

    fetch(`http://localhost:3500/clientes/${client.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setClient(data)
        setShowClientForm(!showClientForm)
        setMessage('Cliente atualizado!')
        setType('success')
      })
  }

  function toggleClientForm() {
    setShowClientForm(!showClientForm)
  }

  return (
    <>
      {client.nome ? (
        <div className={styles.client_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Cliente: {client.nome}</h1>
              <button className={styles.btn} onClick={toggleClientForm}>
                {!showClientForm ? 'Editar cliente' : 'Fechar'}
              </button>
              {!showClientForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Email:</span> {client.email}
                  </p>
                  <p>
                    <span>Telefone:</span> {client.telefone}
                  </p>
                  <p>
                    <span>Localização:</span> {client.locatex}, {client.locatey}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <ClientForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    clientData={client}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Client