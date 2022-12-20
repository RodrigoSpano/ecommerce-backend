class OrderDto{
  constructor({_id, products, orderNumber, date, state, email, totalPrice}){
    this.products = products
    this.orderNumber = orderNumber
    this.date = date
    this.state = state
    this.email = email
    this._id = _id
    this.totalPrice = totalPrice
  }
}

export default function(order){
  if(Array.isArray(order)) return order.map(el => new OrderDto(el))
  return new OrderDto(order)
}