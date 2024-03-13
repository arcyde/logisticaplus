import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './ClientForm.module.css'

function ClientForm({ handleSubmit, btnText, clientData }) {
  const [client, setClient] = useState(clientData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(client)
  }

  function handleChange(e) {
    setClient({ ...client, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do cliente"
        name="nome"
        placeholder="Insira o nome do cliente"
        handleOnChange={handleChange}
        value={client.nome}
      />
      <Input
        type="email"
        text="E-mail do cliente"
        name="email"
        placeholder="Insira o email do cliente"
        handleOnChange={handleChange}
        value={client.email}
      />
      <Input
        type="text"
        text="Contato do cliente"
        name="telefone"
        placeholder="Insira o contato do cliente"
        handleOnChange={handleChange}
        value={client.telefone}
      />

      <Input
        type="number"
        text="Localização X do cliente"
        name="locatex"
        placeholder="Insira a localização X do cliente"
        handleOnChange={handleChange}
        value={client.locatex}
      />

      <Input
        type="number"
        text="Localização Y do cliente"
        name="locatey"
        placeholder="Insira a localização Y do cliente"
        handleOnChange={handleChange}
        value={client.locatey}
      />

      <SubmitButton text={btnText} />
    </form>
  )
}

export default ClientForm