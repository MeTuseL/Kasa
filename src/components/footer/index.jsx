import logoFooter from '../../assets/images/logo_Kasa_Footer.png'
import styles from './css/footer.module.css'

//component footer
function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <img
          className={styles.container__image}
          src={logoFooter}
          alt="Logo de Kasa"
        />
        <span className={styles.container__span}>
          © 2020 Kasa. All rights reserved
        </span>
      </div>
    </footer>
  )
}
export default Footer
