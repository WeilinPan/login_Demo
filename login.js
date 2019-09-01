// define things user might want
const users = [{
  firstName: 'Tony',
  email: 'tony@stark.com',
  password: 'iamironman'
},
{
  firstName: 'Steve',
  email: 'captain@hotmail.com',
  password: 'icandothisallday'
},
{
  firstName: 'Peter',
  email: 'peter@parker.com',
  password: 'enajyram'
},
{
  firstName: 'Natasha',
  email: 'natasha@gamil.com',
  password: '*parol#@$!'
},
{
  firstName: 'Nick',
  email: 'nick@shield.com',
  password: 'password'
}]

function login(options) {
  const Check = users.find((user) => {
    return (options.email === user.email) && (options.password === user.password)
  })

  if (Check === undefined) {
    return false
  } else {
    return Check
  }
}
module.exports = login



