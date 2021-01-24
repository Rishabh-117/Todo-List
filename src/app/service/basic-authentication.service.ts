import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  // authentication(username,password){
  //   if(username==='lakshay' && password==='dummy'){
  //   sessionStorage.setItem('a',username)  
  //   return true
  //   }
  //   return false
  // }
  executeJWTAuthService(username,password){

    
       return this.http.post<any>(`http://localhost:8080/authenticate`,{
         username,
         password
       }).pipe(

       map(
         data => {
           sessionStorage.setItem('a',username)
           sessionStorage.setItem('token',`Bearer ${data.token}`)
           return data
         }
       )
       )
}

  // executeAuthService(username,password){

  //     let basicString = 'Basic ' + window.btoa(username + ':' + password)
  //        let headers = new HttpHeaders({
  //          Authorization: basicString
  //        })
  //        return this.http.get<AuthBean>(`http://localhost:8080/basicauth`,{headers}).pipe(

  //        map(
  //          data => {
  //            sessionStorage.setItem('a',username)
  //            sessionStorage.setItem('token',basicString)
  //            return data
  //          }
  //        )
  //        )
  // }

      authUser(){
        return sessionStorage.getItem('a')
      }

      authToken(){
        if(this.authUser())
        return sessionStorage.getItem('token')

      }
   isUserLoggedIn(){
     let user = sessionStorage.getItem('a')
     return !(user===null)
   }
   logout(){
     sessionStorage.removeItem('a')
     sessionStorage.removeItem('basicString')
   }

}
export class AuthBean{
  constructor(public message:String){}
}
