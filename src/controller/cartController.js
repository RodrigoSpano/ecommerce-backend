import CartApi from '../api/cart/cartApi.js';
import { validateProductCart } from '../utilities/helpers.js';

const api = new CartApi()

export const getAll = async (req, res) => {
  try {
    const products = await api.getAll(req.user.email)
    res.json({success: true, products})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const addToCart = async (req, res) => {
  try {
    const validate = await validateProductCart(req.body.items, req.user.email)
    if(validate) return res.status(400).json({error: 'this products is already on cart'})
    const adding = await api.addToCart(req.body, req.user.email)
    res.json({success: true, message: adding})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

export const updateOne = async (req, res) => {
  try {
    const product = await api.updateOne()
    res.json({success: true, product})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deleteOne = async (req, res) => {
  try {
    const {id} = req.params
    await api.deleteOne(id)
    res.json({success:true, deleted: id})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deleteAll = async (req, res) => {
  try {
    await api.deleteAll()
    res.json({success: true})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}