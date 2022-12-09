
class ProdDto{
  constructor({_id, title, price, images, description, category, author, stock}){
    this.title = title
    this.price = price
    this.images = images
    this.description = description
    this.category = category
    this.author = author
    this.stock = stock
    this._id = _id
  }
}

export default function(data){
  if(Array.isArray(data)) return data.map(prod => new ProdDto(prod))
  return new ProdDto(data)
}