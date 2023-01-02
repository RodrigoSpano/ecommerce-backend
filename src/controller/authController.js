import AuthApi from '../api/auth/authApi.js';
import { findAdmin } from '../utilities/helpers.js';
import { transporter } from '../utilities/nodemailer.js';

const api = new AuthApi()

export const signUp = async (req, res) => { //todo middleware para validar q no exista el user
  try {
    // make sure password and repeat password matches
    if(req.body.password !== req.body.repeatPassword) return res.status(400).json({error: 'passwords does not match'})
    const data = req.body
    const sign = await api.signUp(data)
    if(sign) {
        await transporter.sendMail({
          from: 'from "books ecommerce server 👻"', 
          to: await findAdmin(), 
          subject: 'New account created!',
          html: ` <strong>Welcome ${req.body.email}! </strong> <b>thanks for join us! ${req.body.firstName} ${req.body.lastName} </b>`, // html body
        });
      res.status(200).json({sign})
      return ;
    } 
      res.status(400).json({error: error.message})
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

  export const logIn = async (req, res) => {
    try {
      const log = await api.logIn(req.body)
      if(log)
      {
        res.cookie('myAccessToken', log.token, { httpOnly: true })
        res.status(200).json({success: "you have been authenticated, visit '/' to get access"})
        return;
      }
      res.status(401).json({error: 'wrong credentials'})
    } catch (error) {
      return res.status(500).json({
      error: error.message,
    });
    }
  };

  export const logOut = async (req, res) => {
    try {
      res.clearCookie('myAccessToken')
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
  
  export const renderLogin = async (req, res) => {
    try {
      res.render('login')
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
      
    }
  }