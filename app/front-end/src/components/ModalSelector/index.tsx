import { useRef } from "react"
import style from "./style.module.css"

interface ModalSelectorProps{
  getUser: (id:string)=>Promise<{
    name: string
    age: string
    email: string
  }>
  closeModal: ()=>void
  id: string
}

// export function ModalSelector({getUser, closeModal, id}:ModalSelectorProps) {
export function ModalSelector({getUser, closeModal, id}:ModalSelectorProps) {

  const inputName = useRef<HTMLInputElement | string | null>(null)
  const inputAge = useRef<HTMLInputElement | string | null>(null)
  const inputEmail = useRef<HTMLInputElement | string | null>(null)

  getUser(id).then((res)=>{
    inputName.current = res.name
    inputAge.current = res.age
    inputEmail.current = res.email
  })

  async function editedUser() {
    // createUser()
    // getUser()
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