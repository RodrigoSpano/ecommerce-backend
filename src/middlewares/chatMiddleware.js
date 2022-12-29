import chatModel from '../models/chatModel.js';


export const chatExists = async (req, res, next) => {
  const email = 'cataconpepe@gmail.com'  //TODO acordarse de borrar
  const findChat = await chatModel.findOne({email: email})
  if(!findChat) {
    const data = {
      // email: req.user.email,
      email: email,
      messages: []
    }
    const chat = new chatModel(data)
    await chat.save()
  } 
  return next()
}

