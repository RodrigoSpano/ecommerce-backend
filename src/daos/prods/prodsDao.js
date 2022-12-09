import Products from '../../models/prodModel.js'
import asDto from './prodsDto.js'

class ProdsDao{
  constructor(){}

  async getOne(_id){
    try {
      const prod = await Products.findOne({_id})
      return asDto(prod)
    } catch (error) {
      return error
    }
  }

  async getByCategory(category){
    try {
      const prods = await Products.find({category: category})
      return asDto(prods)
    } catch (error) {
      return error
    }
  }

  async getAll(){
    try {
      const prods = await Products.find({})
      return asDto(prods)
    } catch (error) {
      return error
    }
  }

  async addOne(data){
    try {
      const dto = asDto(data)
      const prod = new Products(dto)
      await prod.save()
      return prod
    } catch (error) {
      return error
    }
  }

  async updateOne(_id, data){
    try {
      await Products.findOneAndUpdate({_id}, data)
      const updatedOne = await Products.findOne({_id})
      return asDto(updatedOne)
    } catch (error) {
      return error
    }
  }

  async deleteOne(_id){
    try {
      await Products.deleteOne({_id})
    } catch (error) {
      return error
    }
  }

  async deleteAll(){
    try {
      await Products.deleteMany({})
    } catch (error) {
      return error
    }
  }
}

export default ProdsDao