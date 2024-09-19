import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-figmap1',
  templateUrl: './figmap1.page.html',
  styleUrls: ['./figmap1.page.scss'],
})
export class Figmap1Page implements OnInit {
public figmap1arry:any={}
public figmap1arry1:any={}
public figmap1arry2:any={}
public figmap1arry3:any={}

buttonClass: string = 'primary';

  constructor(public router:Router,private dataServies:DataserviceService) { }

  toggleButtonClass() {
    if (this.buttonClass === 'primary') {
      this.buttonClass = 'success';
    } else if (this.buttonClass === 'success') {
      this.buttonClass = 'danger';
    } else {
      this.buttonClass = 'primary';
    }
  }
  ngOnInit() {
    this.figmap1arry=this.dataServies.figmap1arry;
    this.figmap1arry1=this.dataServies.figmap1arry1;
    this.figmap1arry2=this.dataServies.figmap1arry2;
    this.figmap1arry3=this.dataServies.figmap1arry3;



  }
  next()
  {
    this.router.navigate(['/figmap2'])
  }

}
