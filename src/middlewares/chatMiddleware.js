import chatModel from '../models/chatModel.js';


export const chatExists = async (req, res, next) => {
  const findChat = await chatModel.findOne({email: req.user.email})
  if(!findChat) {
    const data = {
      email: req.user.email,
      messages: []
    }
    const chat = new chatModel(data)
    await chat.save()
  } 
  return next()
}

