export default {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/proyectoFinal',
  SESSION_URI: process.env.SESSION_URI || 'mongodb://localhost/sessions',
  SECRET: process.env.SECRET || 'mySecret',
  MONGO_CONFIG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};