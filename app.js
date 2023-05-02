const port = parseInt(process.env.PORT) || 8000
const express = require("express")
const firebase = require('firebase')
const fireray = require('fireray');
const app = express()

const expressEncorder = express.urlencoded({
  extended: true
})

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "open-notice.firebaseapp.com",
  projectId: "open-notice",
  storageBucket: "open-notice.appspot.com",
  messagingSenderId: "107739760702",
  appId: "1:107739760702:web:6ac4beca6e133b64e1696f",
  measurementId: "G-F0TFTTGM5Y"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
fireray.singleUse('firebase')

app.use('/public', express.static('./src/assets'))
app.use('/', express.json())

app.post('/create_post', expressEncorder, (req, res) => {
  const resEmail = req.body.email
  const resName = req.body.name

  if (resEmail == '') {
    return res.status(400)
  }

  fireray.use('get', (module) => {
    module(db, 'postagens').then((response) => {
      const emailsUndefined = response == undefined?[{email: 'nãouseesseeemail@gmail.com'}]:response
      const emails_ = emailsUndefined.map(obj => obj.email);
      if (emails_.includes(resEmail)) return res.json({status: 'error'})
      require('./src/api/sendEmailBackend')(emailsUndefined, resEmail, resName)
      fireray.use('push', (module) => {
        module(db, 'postagens', req.body)
        res.json({status: 'success'})
      })
    })
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/pages/index.html')
})

app.get('/api/posts', (req, res) => {
  fireray.use('get', (module) => {
   module(db, 'postagens').then((response) => {
      const obj = {}
      obj.tot_members = response == undefined ? 0 : response.length
      res.json(obj)
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})