import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
public segmentsarr: any={cart:"0"}

  selectedSegment: string = 'shipped';
  shippedItems: any[] = [];
  deliveredItems: any[] = [];

  constructor(public router:Router,private globalService: GlobalService) { }

  ngOnInit() {
    this.loadItems();

    this.globalService.getCartItemCount().subscribe(count => {
      this.segmentsarr.cart = count.toString();
    });
  }
  loadItems() {
    this.shippedItems = this.globalService.getShippedItems();
    this.deliveredItems = this.globalService.getDeliveredItems();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  changeStatus(item: any, index: number) {
    this.shippedItems.splice(index, 1);
    this.deliveredItems.push(item);
    this.globalService.setShippedItems(this.shippedItems);
    this.globalService.setDeliveredItems(this.deliveredItems);
  }
  cart(){
    this.router.navigate(['/figmap8-cart'])
  }
  home(){
    this.router.navigate(['/figmap1'])
  }
  figmap7(){
    this.router.navigate(['/figmap7'])
  }
  setting(){
    this.router.navigate(['/figmasettingp11'])
  }
}