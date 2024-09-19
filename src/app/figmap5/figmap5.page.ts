import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';

register();
@Component({
  selector: 'app-figmap5',
  templateUrl: './figmap5.page.html',
  styleUrls: ['./figmap5.page.scss'],
})
export class Figmap5Page implements OnInit {
  public figmap5arry:any={}
  public figmap5arry1:any={}
  public figmap5arry2:any={}
  public figmap5arry3:any={}
  public figmap5arry4:any={}
  // Forlooparry
  public figmap5data:any=[]
  public figmap5arr:any={}





  constructor(public router:Router,private dataServies:DataserviceService, private globalService: GlobalService) { }
  onImgClick(item: any) {
    this.router.navigate(['/figmap6'], {
      queryParams: {
        img1: item.img6,
        text1: item.text14
      }
    });
  }
  ngOnInit() {
    this.figmap5arry=this.dataServies.figmap5arry;
    this.figmap5arry1=this.dataServies.figmap5arry1;
    this.figmap5arry2=this.dataServies.figmap5arry2;
    this.figmap5arry3=this.dataServies.figmap5arry3;
    this.figmap5arry4=this.dataServies.figmap5arry4;
    this.figmap5data=this.dataServies.figmap5data;
    this.figmap5arr=this.dataServies.figmap5arr;

    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap5arr.cart = count.toString();
    });
  }
  
  home()
  {
    this.router.navigate(['/figmap1']);
  }
  cart()
  {
    this.router.navigate(['/figmap8-cart']);
  }
  back()
  {
    this.router.navigate(['/figmap4']);
  }
  figmap7()
  {
    this.router.navigate(['/figmap7']);
  }
  setting()
  {
    this.router.navigate(['/figmasettingp11']);
  }
}
