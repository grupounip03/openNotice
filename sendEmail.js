const sendmail = require('sendmail')();

module.exports = function(emails, email, name) {
   console.log(emails)
   const emails_ = emails.map((obj) => obj.email)
   if (emails_.includes(email)) return;

   sendmail({
      from: 'vladiminson@gmail.com',
      to: email,
      subject: `${name}`,
      html: 'bla bla bla bla',
   }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
   });
}