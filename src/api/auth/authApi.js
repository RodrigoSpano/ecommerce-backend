import AuthDao from '../../daos/auth/authDao.js';

class AuthApi{
  constructor(){
    this.dao = new AuthDao()
  }

  async signUp(data){
    return await this.dao.signUp(data)
  }

  async logIn(data){
    return await this.dao.logIn(data)
  }
}

export default AuthApi