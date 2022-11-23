//const http = require("http");

//const hostname = "localhost";

//const server = http.createServer((request, response) => {
//    response.statusCode = 200;
//    response.setHeader("Content-Type", "text/plain");
//    response.end("Hello World!");
//})

//server.listen(3333, hostname, () => {
//    console.log("Server running in localhost:3333");
//});

import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.json({ message: "hello world"});
});

app.listen(3000, () => console.log("api rodando"));

https.createServer({
    cert: fs.readFileSync("C:/Users/fabio/OneDrive/Área de Trabalho/StackX/web3.0/Node/certificate.crt"),
    key: fs.readFileSync("C:/Users/fabio/OneDrive/Área de Trabalho/StackX/web3.0/Node/key.key")
}, app)
.listen(3001, () => console.log("Rodando em https"));