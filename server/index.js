const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send(userJSON)
})

const user = require ("./controller/userController")
app.use('/registro-usuario',user.register)
app.use('/login',user.login)


const PORT = 3001
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT)
})