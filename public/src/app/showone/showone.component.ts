import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {
  ID:any
  pe:{};
  num=0;

    constructor(
    private _showone: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
    this.num=0;
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.ID=params['id'];
      this._showone.getOneTask(params['id'])
      .subscribe(data=>{
        console.log('get one^^^^^:',data);
        this.pe=data[0];
      });
    });
  
  }

  addlike(){
    console.log(this.pe)    
    this.pe['like']=parseInt(this.pe['like'])+1;
    this._showone.updateOneTask(this.pe,this.ID)
    .subscribe(data=>{
      console.log('add one like:',data);
      this.ngOnInit();
      this.num=1;
    });

    ///
  };

  deletepet(){
    this._showone.deleteOneTask(this.ID)
    .subscribe(data=>{
      console.log('delete one:',data);
      this._router.navigate(['/pets']);
    });
  };
}
