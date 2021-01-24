import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   name = ''
   mess = ''
   err = ''
   
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
     this.name = this.route.snapshot.params['name']

  }
  welcomemessage(){
     // console.log(this.service.executeHelloService());
      this.service.executeHelloService().subscribe(
               r=>this.responseSuccess(r),
               e=>this.error(e)
      );
    //console.log("HI")
  }
  welcomemessagepath(){
    // console.log(this.service.executeHelloService());
     this.service.executeHelloServicePathVariable(this.name).subscribe(
              r=>this.responseSuccess(r),
              e=>this.error(e)
     );
   //console.log("HI")
 }
   responseSuccess(r){
        // console.log(r)
        //console.log(r.message)
        this.mess = r.message
   }
   error(e){
        this.err = e.error.message
   }

}
