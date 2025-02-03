import { useEffect, useState } from "react"
import style from "./style.module.css"

interface ModalProps{
  modal: (value:boolean)=>void
  getUser: (id:string)=>Promise<{
    name: string
    age: string
    email: string
  }>
  changeUserData: (id:string, data:{
    name: string
    age: string
    email: string
  }) => void
  id: string
}

export function Modal({modal, getUser, changeUserData, id}:ModalProps) {

  const [inputName, setInputName] = useState<string>('');
  const [inputAge, setInputAge] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');

  useEffect(()=>{
    getUser(id).then((res)=>{
      setInputName(res.name);
      setInputAge(res.age);
      setInputEmail(res.email);
    })
  }, [])

  function closeModal() {
    modal(false)
  }

  async function formSubmit() {
    const data = {
      name: inputName,
      age: inputAge,
      email: inputEmail
    }
    await changeUserData(id, data)
    closeModal()
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
          {/* <ModalSelector getUser={getUser} closeModal={closeModal} id={id} /> */}
          {/* <form action={formSubmit}> */}<div>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className={style.field}
              required
              value={inputName}
              onChange={e => setInputName(e.target.value)}
            />
            <input
              type="text"
              name="age"
              placeholder="Idade"
              className={style.field}
              required
              value={inputAge}
              onChange={e => setInputAge(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={style.field}
              required
              value={inputEmail}
              onChange={e => setInputEmail(e.target.value)}
            />
            <button className={style.btn} type="button" onClick={formSubmit} >
              Cadastrar
            </button>
          {/* </form> */}</div>
        </div>
      </div>
      
    </div>
  )
}