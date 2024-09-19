import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-figmap6',
  templateUrl: './figmap6.page.html',
  styleUrls: ['./figmap6.page.scss'],
})
export class Figmap6Page implements OnInit {
  public figmap6arry: any = {};
  public figmap6arry1: any = {};
  public figmap6arry2: any = {};
  public figmap6arry3: any = {};
  public figmap6arry4: any = {};
  public figmap6arry5: any = {};
  public figmap6arry6: any = {};

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dataServies: DataserviceService,
    private globalService: GlobalService
  ) {}

  increase() {
    this.figmap6arry5.count++;
  }

  decrease() {
    if (this.figmap6arry5.count > 1) {
      this.figmap6arry5.count--;
    }
  }

  ngOnInit() {
    this.figmap6arry = this.dataServies.figmap6arry;
    this.figmap6arry1 = this.dataServies.figmap6arry1;
    this.figmap6arry2 = this.dataServies.figmap6arry2;
    this.figmap6arry3 = this.dataServies.figmap6arry3;
    this.figmap6arry4 = this.dataServies.figmap6arry4;
    this.figmap6arry5 = this.dataServies.figmap6arry5;
    this.figmap6arry6 = this.dataServies.figmap6arry6;

    this.route.queryParams.subscribe(params => {
      const img1 = params['img1'];
      const text1 = params['text1'];

      if (img1 && text1) {
        this.figmap6arry.img1 = img1;
        this.figmap6arry.text1 = text1;
      }
    });
    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap6arry1.cart = count.toString();
    });
  }

  selectedColor: string | null = null;
  selectedSize: string | null = null;

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addToCart() {
    if (this.selectedColor && this.selectedSize) {
      const item = {
        img1: this.figmap6arry.img1,
        text5: "Lorem ipsum dolor sit amet, consectetur",
        text6: `${this.selectedColor}, Size ${this.selectedSize}`,
        subtotal: parseFloat(this.figmap6arry.text1.replace('$', '')) * this.figmap6arry5.count,
        price: parseFloat(this.figmap6arry.text1.replace('$', '')),
        quantity: this.figmap6arry5.count,
      };
      this.globalService.addToCart(item);
      this.router.navigate(['/figmap8-cart']);
    } else {
      // Show an alert or message that color and size must be selected
    }
  }

  next() {
    this.router.navigate(['/figmap7']);
  }
  back() {
    this.router.navigate(['/figmap5']);
  }
}