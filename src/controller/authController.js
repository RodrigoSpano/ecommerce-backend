import AuthApi from '../api/auth/authApi.js';

const api = new AuthApi()

export const signUp = async (req, res) => { //todo middleware para validar q no exista el user
  try {
    if(req.body.password !== req.body.repeatPassword) return res.status(400).json({error: 'passwords doesnt match'})
    const data = req.body
    const sign = await api.signUp(data)
    sign ? res.status(200).json({sign}) : res.status(400).json({error: error.message})
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

  export const logIn = async (req, res) => {
    try {
      const log = await api.logIn(req.body)
      log ? res.status(200).json({log}) : res.status(401).json({error: 'wrong credentials'})
    } catch (error) {
      return res.status(500).json({
      error: error.message,
    });
    }
  };

  export const logOut = async (req, res) => {
    try {
      req.session.destroy((error) => {
        if(error) return res.status(400).json({error: error.message})
      })
      res.json({success: true})
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }