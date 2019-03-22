import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  aut:any={
    name:null,
    type:null,
    des:null,
    s1:null,
    s2:null,
    s3:null
  };
  
  name:string
  type:string
  des:string
  
  dublicate:any;

  constructor(
    private _new: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {

  }

  addone(){
    this.name=null
    this.type=null
    this.des=null
    this.dublicate=null;
    if(this.aut['type']){
    this.aut['type']=this.aut['type'].toLowerCase()}
    ///
    this._new.createOneTask(this.aut)
      .subscribe(data=>{
        console.log('add an pet:', data)
      if(data['errors']){
        for (let key in data['errors']){
          if(key=='name'){
            this.name=data['errors']['name']['message'].toString()
            console.log('name',this.name);
          }
          if(key=='type'){
            this.type=data['errors']['type']['message'].toString()
            console.log('type',this.type);
          }
          if(key=='des'){
            this.des=data['errors']['des']['message'].toString()
            console.log('des',this.des);
            
          }
        }
      }
      //   this.name=data['errors']['name']['message'].toString()
      //   console.log('name:',this.name);
      // // }
      // // if(data['errors']['type']['message']){
      //   this.type=data['errors']['type']['message'].toString()
      //   console.log('type',this.type);
       
      // }
      // if(data['errors']['des']['message']){
        // this.des=data['errors']['des']['message'].toString()
        // console.log('des',this.des);
      // }
      else if(data['name']=="MongoError"){
        this.dublicate="This name already exists"
      }
      else{
          this._router.navigate(['/pets']);
      }
    });
    ////

   
  }

}
