const express = require("express")
const firebase = require('firebase')
const fireray = require('fireray');
const path = require("path")
const app = express()
require('dotenv').config() 

const expressEncorder = express.urlencoded({
  extended: true
})

const firebaseConfig = {
  apiKey: 'AIzaSyDo3tlYQyu4JOI7NISCxQqWa70mVnsfgUc',
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

app.use('/', express.json())

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)

app.use('/public', express.static('./public'))

app.post('/create_post', expressEncorder, (req, res) => {
  const resEmail = req.body.email
  const resName = req.body.name

  if (resEmail == '') {
    return res.status(400)
  }
  fireray.use('get', (module) => {
    module(db, 'postagens').then((response) => {
      require('./sendEmail.js')(response == undefined?[{email: 'pornhub@gmail.com'}]:response, resEmail, resName)
      fireray.use('push', (module) => {
        module(db, 'postagens', req.body)
      })
    })
  })
})

app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/index.html"))
})

app.get('/posts', (req, res) => {
  fireray.use('get', (module) => {
    module(db, 'postagens').then((response) => {
      res.send(response)
    })
  })
})

app.listen(8001, () => {
  console.log("Listening on port " + 8001)
})