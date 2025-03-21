import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from "cors"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get('/users', async (req, res)=>{
  let users = []

  if(req.query){
    users = await prisma.user.findMany({
      where: {
        email: req.query.email,
        name: req.query.name,
        age: req.query.age
      }
    })
  } else {
    await prisma.user.findMany()
  }

  res.status(200).json(users)
})

app.get('/user/:id', async (req, res)=>{

  let user = null

  if(req.query){
    user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    })
  }

  res.status(200).json(user)
})

app.post('/users', async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.put('/user/:id', async (req, res)=>{

  const {name, age, email} = req.body
  console.log(name, age, email)

  await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      email: email,
      name: name,
      age: age,
    }
  })

  res.status(200).json({message: "user updated with success"})
})

app.delete('/users/:id', async (req, res)=>{
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(200).json({message: "user deleted with success"})
})

const PORT = 3000
app.listen(3000, ()=>{
  console.log(`Server running at PORT ${PORT}`)
})