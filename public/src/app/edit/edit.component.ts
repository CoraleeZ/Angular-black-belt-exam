import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  ed:any={
    name:null,
    type:null,
    des:null,
    s1:null,
    s2:null,
    s3:null,
    like:null
  };
  err:any;
  errmess:string;
  ID:any;
  LIKE:any;
  name:string
  type:string
  des:string
  dublicate:any;

  constructor(
    private _edit: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
   
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._edit.getOneTask(params['id'])
      .subscribe(data=>{
        console.log('get one :',data);
        let dataall=data;
        if(data['name']=='CastError'){
          this.errmess=data['message'];
          this.err=1;
        }else{
          this.ed=data[0];
          this.ID=params['id'];
          this.LIKE=data[0]['like'];
          this.err=0;
        }
      });
    });  
  }

  editauthor(){
    this.name=null
    this.type=null
    this.des=null
    this.dublicate=null;
 this.ed['type']=this.ed['type'].toLowerCase()
    this._edit.updateOneTask(this.ed,this.ID)
      .subscribe(data=>{
        console.log('edit author:', data)
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
        // if(data['errors']){
        //   this.validations=data['errors'];
        // }  else if(data['name']=="MongoError"){
        //   this.dublicate="This name already exists"
        // }
        else{
          this._router.navigate(['/pets/'+this.ID]);       
        }
      });
  }

}
