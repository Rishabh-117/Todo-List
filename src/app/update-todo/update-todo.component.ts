import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  id: number
  todo :Todo

  constructor(private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
        this.id = this.route.snapshot.params['id']
        this.todo = new Todo(this.id,'',false,new Date())
        if(this.id!=-1){
           this.service.RetriveTodo('lucky',this.id).subscribe(
               data=>{
                 this.todo=data
               }
           )}

  }
   SaveTodo(){
     if(this.id == -1){
              this.service.createTodo('lucky',this.todo).subscribe(
                data=>{
                  this.router.navigate(['todos'])
                }
              )
     }else{
       this.service.updateTodo('lucky',this.id,this.todo).subscribe(
         data=>{
           console.log(data)
           this.router.navigate(['todos'])
         }
       )}
   }
}
