import styles from './ClientCard.module.css'
import { Link } from 'react-router-dom'
import ModalButton from '../layout/ModalButton'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ClientCard({id, nome, email, telefone, locatex, locatey, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
      <div className={styles.client_card}> 
        <h4>{nome}</h4>
        <p>
          <span>E-mail:</span> {email}
        </p>
        <p>
          <span>Telefone:</span> {telefone}
        </p>
        <p><span>Localização:</span> {locatex}, {locatey}</p> 
        <ModalButton modalTexto={"Localização do cliente "+ nome} texto={"Localização"} data={[{x:parseInt(locatex),y:parseInt(locatey)}]} /> 

        <div className={styles.client_card_actions}>
            
            <Link to={`/client/${id}`}>
                <BsPencil/> Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/> Excluir
            </button>
        </div>
      </div> 
    )
}

export default ClientCard