import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor(private basic: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
  // let username='lucky'
  // let password = 'dummy'
  // let basicString = 'Basic ' + window.btoa(username + ':' + password)
   let basicString = this.basic.authToken()
   let username = this.basic.authUser()
   if(basicString && username){
   req = req.clone({
     setHeaders : {
       Authorization : basicString
     }
   })
   }
  return next.handle(req)
}

}
