import User from '../../models/userModel.js';
import authDto from './authDto.js';

class AuthDao{
  constructor(){}

  async signUp(data) {
    try {
      const dto = authDto(data)
      const user = new User(dto)
      await user.save()
      return user
    } catch (error) {
      return error
    }
  }

  async logIn(data){
    try {
      const user = await User.findOne({ email: data.email })
      if(user){
        const isMatch = user.comparePassword(data.password)
        if(isMatch){
          const token = user.createToken()
          return {
            user,
            token
          }
        }
      }
    } catch (error) {
      return error
    }
  }
}

export default AuthDao