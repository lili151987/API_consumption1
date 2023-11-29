const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://myapp1:X0zpIn5YLCtxHMpP@cluster0.8vpkagh.mongodb.net/?retryWrites=true&w=majority')


app.get('/users',user.list)
app.post('/users',user.create)
app.get('/users:id', user.get)
app.put('/users:id', user.update)
app.patch('/users:id',user.update)
app.delete('/users:id',user.destroy)


app.use(express.static('app'))

app.get('/', (req,res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
    
})

app.get('*',(req,res) =>{
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('arrancando la aplicacions')
})
//status 200, significa ok y devuelve datos
//status 201 significa ok creado y devuelve el id
//status 204, significa ok, es decir, se ha procesado tu peticion con exito, yque no devolveremos nada, no content
//204 se usara para put, patch y deletes
