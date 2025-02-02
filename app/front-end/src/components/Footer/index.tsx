import { FaLinkedin, FaGithub } from "react-icons/fa";

import style from "./style.module.css"

export function Footer() {
  return(
    <footer className={style.footerContainer}>
      <div className={style.menu}>
        <p>Created by</p>
        <p>DEV Ícaro Carvalho</p>
      </div>
      <nav className={style.navFooter}>
        <p className={style.navFooterBtn}><FaLinkedin /></p>
        <p className={style.navFooterBtn}><FaGithub /></p>
      </nav>
    </footer>
  )
}