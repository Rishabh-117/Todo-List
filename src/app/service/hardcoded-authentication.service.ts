import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  // authentication(username,password){
  //   if(username==='lakshay' && password==='dummy'){
  //   sessionStorage.setItem('a',username)  
  //   return true
  //   }
  //   return false
  // }
  //  isUserLoggedIn(){
  //    let user = sessionStorage.getItem('a')
  //    return !(user===null)
  //  }
  //  logout(){
  //    sessionStorage.removeItem('a')
  //  }

}
