require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = function (emails, email, name) {
   const emails_ = emails.map(obj => obj.email);
   if (emails_.includes(email)) return;

   const smpt = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
         user: process.env.EMAIL_ADRESS,
         pass: process.env.PASSWORD
      }
   });

   const configEmail = {
      from: process.env.EMAIL_ADRESS,
      to: email,
      subject: `Parábens ${name}, você se inscreveu na newsletter openNotice`,
      text: 'Conteúdo do email'
   };

   const sendEmail = () => {
      new Promise((require, resolve) => {
         smpt
            .sendMail(configEmail)
            .then(res => {
               smpt.close();
               return resolve(res);
            })
            .catch(err => {
               smpt.close();
               console.log(err);
            });
      });
   };
   sendEmail();
};
