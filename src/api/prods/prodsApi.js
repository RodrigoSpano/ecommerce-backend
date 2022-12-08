import ProdsDao from '../../daos/prods/prodsDao.js';

class ProdsApi{
  constructor(){
    this.dao = new ProdsDao()
  }

  async getOne(id){
    return await this.dao.getOne(id)
  }
  async getByCategory(category){
    return await this.dao.getByCategory(category)
  }
  async getAll(){
    return await this.dao.getAll()
  }
  async addOne(data){
    return await this.dao.addOne(data)
  }
  async putOne(id, data){
    return await this.dao.updateOne(id, data)
  }
  async deleteOne(id){
    return await this.dao.deleteOne(id)
  }
  async deleteAll(){
    return await this.dao.deleteAll()
  }

}

export default ProdsApi