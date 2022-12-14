const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const usuarios = []

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.get('/usuarios', (req, res) => {
  res.send(usuarios)
})

app.put('/usuarios/:id', (req,res) => {
  const index = usuarios.findIndex(user => user.id === ~~req.params.id)
  const usuario = req.body

  usuarios.splice(index,1, usuario)
  res.send(usuario)
})

app.post('/usuarios', (req,res) => {
  const usuario = req.body

  usuarios.push(usuario)
  res.send(usuario)
})

app.delete('/usuarios/:id', (req,res) => {
  const index = usuarios.findIndex(user => user.id === ~~req.params.id)
  usuarios.splice(index, 1)
  res.send('Usuário deletado com sucesso!')
  res.status(204).send({ mensagem: 'Usuário deletado com sucesso!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})