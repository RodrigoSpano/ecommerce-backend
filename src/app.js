import { server } from './index.js'
import './config/database.js'

const port = process.env.PORT
server.listen(port, () => console.log('server running on port: ', port))