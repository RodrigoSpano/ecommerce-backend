class AuthDto{
  constructor({email, password, phoneNumber, phoneArea, firstName, lastName}){
    this.email = email
    this.password = password
    this.phone = `${phoneArea} ${phoneNumber}`
    this.name = `${firstName} ${lastName}`
  }
}

export default  function(data){
  if(Array.isArray(data)) return  data.map(user => new AuthDto(user))
  return new AuthDto(data)
}