import { useEffect, useState } from "react";
import api from "../../services/api"

import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import style from "./style.module.css"
import { Modal } from "../Modal";

export function Register(){
  
  let [users, setUsers] = useState<any[]>([])
  let [modal, setModal] = useState<boolean>(false)
  
  async function getUsers() {
    try{
      const usersFromApi = await api.get('/users')
      setUsers(usersFromApi.data)
    }catch (err){
      console.log('ERRO na chamada: ' + err)
    }
  }

  async function deleteUser(id:any) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(()=>{
    getUsers()
  },[])

  console.log(modal)
  function openModal() {
    setModal(true)
    console.log(modal)
  }

  return(
    <main className={style.mainContainer}>
      {users.map( user => (
        <div className={style.createdCard} key={user.id}>
          <div className={style.datas}>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <div className={style.btnsField}>
            <button className={style.edit} onClick={openModal} >
              <FaEdit />
            </button>
            <button className={style.trash} onClick={()=>deleteUser(user.id)} >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      ))}
      {modal === true ? <Modal modal={setModal} getUsers={getUsers} /> : ''}
    </main>
  )
}