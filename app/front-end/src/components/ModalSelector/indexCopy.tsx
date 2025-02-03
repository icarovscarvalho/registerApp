// import { useRef, useState } from "react"
// import api from "../../services/api"
// import style from "./style.module.css"

// interface ModalSelectorProps{
//   closeModal: ()=>void
// }

// export function ModalSelector({closeModal}:ModalSelectorProps) {

//   let [users, setUsers] = useState<any[]>([])

//   const inputName = useRef<HTMLInputElement | null>(null)
//   const inputAge = useRef<HTMLInputElement | null>(null)
//   const inputEmail = useRef<HTMLInputElement | null>(null)

//   async function editeUser(id:any) {
//     const userID = await api.get(`/users/${id}`)
//     await api.put(`/users/${userID}`, {
//       name: inputName.current?.value,
//       age: inputAge.current?.value,
//       email: inputEmail.current?.value
//     })
//     alert("Usuário created with success")
    
//     closeModal()
//     window.location.reload()
//   }

//   return(
//     <>
//       {users.map(user=>(
//         <form action="">
//           <input
//             type="text"
//             name="name"
//             placeholder="Nome"
//             className={style.field}
//             ref={inputName} required
//           />
//           <input
//             type="text"
//             name="age"
//             placeholder="Idade"
//             className={style.field}
//             ref={inputAge} required
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             className={style.field}
//             ref={inputEmail} required
//           />
//           <button className={style.btn} type="button" onClick={()=>editeUser(user.id)} >
//             Cadastrar
//           </button>
//         </form>
//       ))}
//     </>
//   )
// }