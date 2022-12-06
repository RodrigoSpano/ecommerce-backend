import app from './index.js'
import './config/database.js'
import settings from './config/settings.js'

const port = settings.PORT || 8080
app.listen(port, () => console.log('server running on port: ', port))