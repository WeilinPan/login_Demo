// include packages and define sever realted variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const login = require('./login')

// setting template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))

app.set('view engine', '.hbs')

// setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const results = login(options)
  const errorMessage = 'Sorry! Email/Password is wrong!'
  const successMesaage = `Welcome! ${results.firstName}`

  if (results == false) {
    res.render('index', { errorMessage, options })
  } else {
    res.render('Welcome', { successMesaage })
  }

})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})