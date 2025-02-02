import style from "./style.module.css"
import barry from "../../assets/barry.png"

import { IoIosMenu } from "react-icons/io";

interface HeaderProps{
  page: (page:string)=>void
}

export function Header({page}: HeaderProps) {

  return(
    <header className={style.headerContainer}>
      <div className={style.logo}>
        <img src={barry} alt="Barry Logotype" />
        <h1>BarryMeeting</h1>
      </div>
      <nav className={style.navBar}>
        <p className={style.navBarBtn} onClick={()=>{page('Home')}}>Home</p>
        <p className={style.navBarBtn} onClick={()=>{page('Register')}}>Registers</p>
      </nav>
      <div className={style.menu}>
        <IoIosMenu className={style.menuIcon} />
      </div>
    </header>
  )
}