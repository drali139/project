import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DataserviceService } from '../dataservice.service';

register();
@Component({
  selector: 'app-figmap3',
  templateUrl: './figmap3.page.html',
  styleUrls: ['./figmap3.page.scss'],
})
export class Figmap3Page implements OnInit {
public figmap3arry:any={}
public figmap3data:any=[]
public figmap3arry2:any={}

  constructor(public router:Router,private dataServies:DataserviceService) { }

  ngOnInit() {
    this.figmap3arry=this.dataServies.figmap3arry;
    this.figmap3data=this.dataServies.figmap3data;
    this.figmap3arry2=this.dataServies.figmap3arry2;



  }
  next()
  {
    this.router.navigate(['/figmap4'])
  }

}
