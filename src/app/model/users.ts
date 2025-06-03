export interface APIResponsemodel{
    'message':string,
    'result':boolean,
    'data':any
}

export class User{
    email:string

    constructor(){
      this.email=""
    }
  }