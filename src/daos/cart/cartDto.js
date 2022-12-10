class CartDto{
  constructor({_id, prodId, userId, quantity}){
    this.prodId = prodId
    this.userId = userId
    this.quantity = quantity,
    this._id = _id
  }
}

export default function(data){
  if(Array.isArray(data)) return data.map(el => new CartDto(el))
  return new CartDto(data)
}
