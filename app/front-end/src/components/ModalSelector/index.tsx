import { useRef } from "react"
import api from "../../services/api"
import style from "./style.module.css"

interface ModalSelectorProps{
  getUsers: ()=>void
  closeModal: ()=>void
}

export function ModalSelector({getUsers, closeModal}:ModalSelectorProps) {

  const inputName = useRef<HTMLInputElement | null>(null)
  const inputAge = useRef<HTMLInputElement | null>(null)
  const inputEmail = useRef<HTMLInputElement | null>(null)

  async function createUser() {
    const nameLength = inputName.current?.value.length ?? 0
    const ageLength = inputAge.current?.value.length ?? 0
    const emailLength = inputEmail.current?.value.length ?? 0;


    if(nameLength<2 || ageLength<1 || emailLength<11){
      alert("We Need enter with datas in all fields")
      return
    } else {
      await api.put('/users', {
        name: inputName.current?.value,
        age: inputAge.current?.value,
        email: inputEmail.current?.value
      })
      alert("Usuário created with success")
      window.location.reload()
    }
  }

  function editedUser() {
    createUser()
    getUsers()
    closeModal()
  }

  return(
    <>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className={style.field}
          ref={inputName} required
        />
        <input
          type="text"
          name="age"
          placeholder="Idade"
          className={style.field}
          ref={inputAge} required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={style.field}
          ref={inputEmail} required
        />
        <button className={style.btn} type="button" onClick={editedUser} >
          Cadastrar
        </button>
      </form>
    </>
  )
}