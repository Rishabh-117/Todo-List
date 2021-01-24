import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  constructor(private http:HttpClient) { }


  RetriveAllTodos(username:String){
          return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`)
  }
  RetriveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`)
}



     DeleteTodo(username,id){
            return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`)  
     }
     updateTodo(username,id, todo){
      return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo)  
}
createTodo(username, todo){
  return this.http.post(`http://localhost:8080/jpa/users/${username}/todos`, todo)  
}
}

