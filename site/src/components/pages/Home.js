import styles from './Home.module.css'
import savings from '../../img/deliver.png'
import LinkButton from '../layout/LinkButton'

function Home () {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Logística+</span></h1>

      <p>Comece a gerenciar  as suas entregas agora mesmo!</p>

      <LinkButton to="/NewClient" text="Cadastrar Cliente" />
      <img src={savings} alt="Clientes"/>
    </section>
  )
}

export default Home