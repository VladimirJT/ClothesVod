const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
    let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: 'https://api.jsonbin.io/v3/b/664e4d51acd3cb34a84c0660',
    headers: {
        'Content-Type': 'application/json',
        "X-Master-Key": "$2a$10$t28iPs1RtFfzkfyAwJSY4OEM7uptb.RQDYDYmHYSrYhhmWiDLa5.q"
    }
};
axios(config)
    .then(result => {
    res.send(result.data.record)
    })
});


const user = require("./Controller/userController");

app.use("/registro-usuario", user.register);
app.use("/login-user", user.login);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto ", PORT);
});