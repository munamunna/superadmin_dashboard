export interface APIResponsemodel{
    'message':string,
    'result':boolean,
    'data':any
}

export class User {
  id:number
  email: string
  role: string
  full_name: string
  phone: string
  address: string
  

  constructor(){
    this.id=0,
    this.email="",
    this.role="",
    this.full_name="",
    this.phone="",
    this.address=""
  }
}