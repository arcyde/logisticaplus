import {FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href="https://www.linkedin.com/in/nathan-oliveira77/">
              <FaLinkedin/>
            </a>
          </li>   
        </ul>
        <p className={styles.copy_right}><span>Logística+</span> &copy; 2024</p>
      </footer>
    )
  }    
  
  export default Footer