import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-read-write-data',
  templateUrl: './read-write-data.component.html',
  styleUrls: ['./read-write-data.component.scss']
})
export class ReadWriteDataComponent implements OnInit {
  products:any;
  price:number=0;
  name:string='';
  auth:AuthService;
  constructor(authService: AuthService ) {
    this.auth=authService;
     this.auth.dataRead().subscribe((res: any) =>(this.products= res));
  }

  write(){
    this.auth.writeData({price:this.price,name:this.name});
  }

  ngOnInit(): void {
  }


}
