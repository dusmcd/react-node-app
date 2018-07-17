const db = require('./db')
const app = require('./app')

const PORT = 8000

db.sync({ force: true }).then(() => {
  app.listen(PORT, 'localhost', () => {
    console.log(`Server listening at port ${PORT}`)
  })
})
