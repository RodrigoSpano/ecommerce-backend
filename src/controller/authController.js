import User from '../models/userModel.js';


export const signUp = async (req, res) => {
  const { email, password, phoneNumber, phoneArea, firstName, lastName } = req.body;
  if (!email || !password || !phoneNumber || !phoneArea || !firstName || !lastName) {
    return res.status(400).json({
      error: 'complete all the fields',
    });
  }
  try {
    const obj = {
      email,
      password,
      phone: `${phoneArea} ${phoneNumber}`,
      name: `${firstName} ${lastName}`
    }
    const user = new User(obj)
    await user.save()
    res.json({user})
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

  export const logIn = async (req, res) => {
    if(!req.body.email || !req.body.password){
      res.status(400).json({
        error: 'complete all the fields'
      })
    }
    try {
      const user = await User.findOne({ email: req.body.email })
      if(user){
        const isMatch = user.comparePassword(req.body.password)
        if(isMatch){
          const token = user.createToken()
          return res.json({
            user,
            token
          })
        }
      }
      return res.status(401).json({
        error: error.message
      })
    } catch (error) {
      return res.status(500).json({
      error: error.message,
    });
    }
  };