import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
export class Bean{
  constructor(public message:String){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloService(){
    return this.http.get<Bean>('http://localhost:8080/hi')
    //console.log("welcome bouy")
  }
  executeHelloServicePathVariable(name){
    // let Basicheader = this.basicAuthHttp()
    // let headers = new HttpHeaders({
    //      Authorization: Basicheader
    // })

    return this.http.get<Bean>(`http://localhost:8080/hi/${name}`)
    //console.log("welcome bouy")
  }

  // basicAuthHttp(){
  // let username='lucky'
  // let password = 'dummy'
  // let basicString = 'Basic ' + window.btoa(username + ':' + password);
  //          return basicString
  // }

}
