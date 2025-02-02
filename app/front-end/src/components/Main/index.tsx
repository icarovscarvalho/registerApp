import { useRef } from "react";
import api from "../../services/api"
import style from "./style.module.css"

export function Main() {

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
      await api.post('/users', {
        name: inputName.current?.value,
        age: inputAge.current?.value,
        email: inputEmail.current?.value
      })
      alert("Usuário created with success")
      window.location.reload()
    }
  }

  return(
    <main className={style.mainContainer}>
      <form className={style.formContainer}>
        <h1>Cadastro de Usuários</h1>
        <div className={style.formInputs}>
          <input name="name" type="text" placeholder="Nome" ref={inputName} required />
          <input name="age" type="number" placeholder="idade" ref={inputAge} required />
          <input name="email" type="email" placeholder="email" ref={inputEmail} required />
        </div>
        <button className={style.formBtn} type="button" onClick={createUser}>
          Cadastrar
        </button>
      </form>
    </main>
  )
}