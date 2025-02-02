import { ModalSelector } from "../ModalSelector"
import style from "./style.module.css"

interface ModalProps{
  modal: (value:boolean)=>void
  getUsers: ()=>void
}

export function Modal({modal, getUsers}:ModalProps) {

  function closeModal() {
    modal(false)
  }

  return(
    <div className={style.modalScreen}>
      <div className={style.modalContainer}>
        <div className={style.modalHeader}>
          <p>a</p>
          <h2>Edição de Dados</h2>
          <div onClick={closeModal}>
            <p>x</p>
          </div>
        </div>
        <div className={style.modalContent}>
          <ModalSelector getUsers={getUsers} closeModal={closeModal} />
        </div>
      </div>
      
    </div>
  )
}