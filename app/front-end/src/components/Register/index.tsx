import { useEffect, useRef, useState } from "react";
import api from "../../services/api"

import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import style from "./style.module.css"
import { Modal } from "../Modal";

export function Register(){
  
  let [users, setUsers] = useState<any[]>([])
  let [modal, setModal] = useState<boolean>(false)
  
  const selectedUserID = useRef<string | null>(null) 
  
  async function getUsers() {
    try{
      const usersFromApi = await api.get('/users')
      setUsers(usersFromApi.data)
    }catch (err){
      console.log('ERRO na chamada: ' + err)
    }
  }

  async function deleteUser(id:string) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  async function getUser(id:string) {
    const response = await api.get(`/user/${id}`)
    return response.data
  }

  async function changeUserData(id:string, data:{name:string, age: string, email:string}) {
    await api.put(`/user/${id}`, data)
  }

  useEffect(()=>{
    if(!modal) {
      getUsers()
    }
  },[modal])

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
            <button className={style.edit} onClick={()=>{
              selectedUserID.current = user.id
              openModal()
            }} >
              <FaEdit />
            </button>
            <button className={style.trash} onClick={()=>deleteUser(user.id)} >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      ))}
      {modal === true ? <Modal modal={setModal} getUser={getUser} changeUserData={changeUserData} id={selectedUserID.current}  /> : ''}
    </main>
  )
}