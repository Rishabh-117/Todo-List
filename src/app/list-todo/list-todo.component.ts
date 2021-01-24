import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service'
export class Todo{
constructor(
  public id: number,
  public description: string,
  public done: boolean,
  public targetDate: Date
){}

}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
   todos: Todo[]
   mess = ''
   
  //= [
    ///)
        
    // {id:1,description:'learn to sing'},
    // {id:2,description:'learn to happy always'},
    // {id:3,description:'learn to dance'}
  //]   

   

  constructor(private service:TodoDataService,
    private router:Router) { }
  

  ngOnInit(): void {
      this.rish()
        }
        rish(){
          this.service.RetriveAllTodos('lucky').subscribe(
            response => {
              this.todos = response
            }
          )
           
        }

        deleteTodo(id){
                 this.service.DeleteTodo('lucky',id).subscribe(
                   response =>{
                     this.mess = `delete of ${id} succesfully`
                     this.rish()
                   }
                 )
        }
           updateTodo(id){
             console.log(`ipdate ${id}`)
             this.router.navigate(['todos',id])
           }
           addTodo(){
            this.router.navigate(['todos',-1])
          }

 }
 
