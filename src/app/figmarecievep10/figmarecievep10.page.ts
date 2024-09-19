import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-figmarecievep10',
  templateUrl: './figmarecievep10.page.html',
  styleUrls: ['./figmarecievep10.page.scss'],
})
export class Figmarecievep10Page implements OnInit {
public recievearry:any={}
public recievearry1:any={} 
public recievedata:any=[]



  constructor(public router:Router,private dataServies:DataserviceService) { }

  ngOnInit() {
    this.recievearry=this.dataServies.recievearry;
    this.recievearry1=this.dataServies.recievearry1;
    this.recievedata=this.dataServies.recievedata;



  }
  next()
  {
    this.router.navigate(['/figmasettingp11'])
  }
  

}
