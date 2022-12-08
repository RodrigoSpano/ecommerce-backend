import app from './index.js'
import './config/database.js'

const port = process.env.PORT
app.listen(port, () => console.log('server running on port: ', port))