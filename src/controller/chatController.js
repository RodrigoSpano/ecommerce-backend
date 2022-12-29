import {io} from '../index.js'
import chatModel from '../models/chatModel.js';

export const getChat = async (req, res) => {
  const email = 'cataconpepe@gmail.com'; //TODO acordarse de borrar y actualizar con req.user.email
  try {
    io.on('connection', async (socket) => {
      console.log('connected', socket.id);
      //mando al cliente la collection para tener las items ya creados anteriormente
      await chatModel.findOne({email: email}).then(res => socket.emit('allMessages', res))

      socket.on('message', async (msg) => {
        await chatModel.findOneAndUpdate(
          { email: email },
          { $push: { messages: { date: new Date(), body: msg } } },
          { new: true }
        );
        //cada vez que llega un mensaje traemos la base actualizada
        const chats = await chatModel.findOne({email: email})
        socket.emit('allMessages', chats)
      });
    });
    res.render('chat');
  } catch (error) {
    res.status(500);
  }
}
