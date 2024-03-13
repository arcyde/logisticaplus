import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"><img src={logo} alt="Logística+"/></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Início</Link></li>
          <li className={styles.item}><Link to="/Clients">Clientes</Link></li>
          <li className={styles.item}><Link to="/Contact">Contato</Link></li>
        </ul>
      </Container>
    </nav>
  )
}    

export default Navbar