const { app } = require('./app')
const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})