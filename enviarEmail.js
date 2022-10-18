const { pseudoRandomBytes } = require("crypto");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "SMTP.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "pedro.hdias@outlook.com",
        pass: "Phd@9876"
    }
})

transporter.sendMail({
    from: "Pedro Dias <pedro.hdias@outlook.com>",
    to: "pedro.ddias2001@gmail.com",
    subject: "Inscrição - Chá de Mulheres",
    text:"Olá, deu tudo certo"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})