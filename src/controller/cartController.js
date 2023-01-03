import CartApi from '../api/cart/cartApi.js';

const api = new CartApi()

export const getAll = async (req, res) => {
  try {
    const products = await api.getAll()
    res.json({success: true, products})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const addToCart = async (req, res) => {
  try {
    await api.addToCart(req.body)
    res.json({success: true, message: 'added to cart'})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

export const updateOne = async (req, res) => {
  try {
    const {id} = req.params
    const product = await api.updateOne(id, req.body)
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