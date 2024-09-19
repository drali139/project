import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertserviceService } from '../alertservice.service';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';
import { IonModal, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-figmap8-cart',
  templateUrl: './figmap8-cart.page.html',
  styleUrls: ['./figmap8-cart.page.scss'],
})
export class Figmap8CartPage implements OnInit {
  public arry: any = {};
  public arry1: any = {};
  public data: any[] = [];
  public arrymodal: any = {};
  public arry4: any = {};

  public shippingData = {
    country: '',
    address: '',
    city: '',
    postcode: '',
  };
  constructor(
    public router: Router,
    private alertService: AlertserviceService,
    private dataServies: DataserviceService,
    private globalService: GlobalService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.arry = this.dataServies.arry;
    this.arry1 = this.dataServies.arry1;
    this.data = this.dataServies.data;
    this.arrymodal = this.dataServies.arrymodal;
    this.arry4 = this.dataServies.arry4;

    this.globalService.getCartItems().subscribe(items => {
      this.data = items;
      this.updateCartCount();
      this.cal();
    });

    this.globalService.getCartItemCount().subscribe(count => {
      this.arry.text2 = count.toString();
    });
  }

  updateCartCount() {
    this.globalService.updateCartItemCount();
  }

  async presentDeleteAlert(i: number) {
    await this.alertService.presentDeleteAlert(() => {
      this.globalService.removeItem(i);
      this.updateCartCount();
      this.cal();
    });
  }

  decreaseQuantity(i: number) {
    const currentItem = this.data[i];
    if (currentItem.quantity > 1) {
      this.globalService.updateItemQuantity(i, currentItem.quantity - 1);
      this.updateCartCount();
      this.cal();
    } else {
      this.presentDeleteAlert(i);
    }
  }

  increaseQuantity(i: number) {
    const currentItem = this.data[i];
    if (currentItem.quantity < 5) {
      const newQuantity = Number(currentItem.quantity) + 1;
      this.globalService.updateItemQuantity(i, newQuantity);
      this.updateCartCount();
      this.cal();
    } else {
      this.alertService.presentCustomAlert(true, () => {});
    }
  }

  cal() {
    let mainsubtotal = 0;

    for (let item of this.data) {
      mainsubtotal += item.subtotal;
    }

    this.arry4.mainsubtotal = mainsubtotal.toString();
    this.arry4.total = (mainsubtotal + parseFloat(this.arry4.delivery)).toString();
  }
  saveChanges() {
    // Combine the shipping data into a single string
    const newAddress = `${this.shippingData.country}, ${this.shippingData.address}, ${this.shippingData.city}, ${this.shippingData.postcode}`;
    this.arry1.text4 = newAddress;
    this.modalController.dismiss();

    // Reset the form
    this.shippingData = {
      country: '',
      address: '',
      city: '',
      postcode: '',
    };
  }

  back() {
    this.router.navigate(['/figmap6']);
  }

  checkout() {
    this.globalService.setShippingAddress(this.arry1.text4);
    this.globalService.setCheckoutItems(this.data);
    this.router.navigate(['/figmapaymentp9']);
  }
  home(){
    this.router.navigate(['/figmap1'])
  }
  figmap7() {
    this.router.navigate(['/figmap7']);
  }
  setting(){
    this.router.navigate(['/figmasettingp11'])
  }
}
