class CartDto{
  constructor({_id, date, email, address, items}){
    this.email = email
    this.date = date
    this.items = items
    this.address = address
    this._id = _id
  }
}

export default function(data){
  if(Array.isArray(data)) return data.map(el => new CartDto(el))
  return new CartDto(data)
}
