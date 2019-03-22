import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allpets:any=[];
    
   
  
    constructor(
      private _home: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
      ){};
  
    ngOnInit() {
      this.allpets=[];
      this._home.getAllTask()
      .subscribe(data=>{
        console.log('get all:',data);
  
        let getallpet:any=data;
        //sort alphabetically
        let temp={};
        let forsort=[];
  
        for(let x=0;x<getallpet.length;x++){
            if(temp[getallpet[x].type]){
            temp[getallpet[x].type].push(getallpet[x]);
            }else{
              temp[getallpet[x].type]=[getallpet[x]];
            }
        };
        
////
    for(let key in temp){
      for(let p=0;p<temp[key].length;p++){
        forsort.push(temp[key][p]);
      }
    }
    this.allpets=forsort

    ////
  
  
        // for(let y=0;y<forsort.length;y++){
        //   let key=forsort[y];
        //   let val=temp[key];
        //   this.allpets.push(val);
        // };
       
        //
      });

    }

  

}
