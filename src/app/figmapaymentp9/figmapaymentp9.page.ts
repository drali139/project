import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-figmapaymentp9',
  templateUrl: './figmapaymentp9.page.html',
  styleUrls: ['./figmapaymentp9.page.scss'],
})
export class Figmapaymentp9Page implements OnInit {
  @ViewChild('modal') modal!: IonModal;
  public paymentarry:any={}
  public shippingarry:any={}
  public contactarry:any={}
  public itemsarry:any={}
  public figmap9:any=[]
  public optionsarry:any={}
  public figmapay:any={}
  public figmapay1:any={}
  public warnarry:any={}
  public methodarry:any={}
  public arrybutton:any={}
  public payarry:any={}
  public modal1p9:any={}
  public modal2p9:any={}
  public figmap9arr:any={}

  public shippingData = {
    country: '',
    address: '',
    city: '',
    postcode: '',
  };
  public contactData = {
    phone: '',
    email: '',
  };
  public debitCardData: any;
public standardSelected: boolean = true;
  public expressSelected: boolean = false;
  private cartTotal: number = 0;
  

  constructor(public router:Router,private dataServies:DataserviceService, private globalService: GlobalService,private modalController: ModalController) { }

  ngOnInit() {
    this.paymentarry=this.dataServies.paymentarry;
    this.shippingarry=this.dataServies.shippingarry;
    this.contactarry=this.dataServies.contactarry;
    this.itemsarry=this.dataServies.itemsarry;
    this.figmap9=this.dataServies.figmap9;
    this.optionsarry=this.dataServies.optionsarry;
    this.figmapay=this.dataServies.figmapay;
    this.figmapay1=this.dataServies.figmapay1;
    this.warnarry=this.dataServies.warnarry;
    this.methodarry=this.dataServies.methodarry;
    this.arrybutton=this.dataServies.arrybutton;
    this.payarry=this.dataServies.payarry;
    this.modal1p9=this.dataServies.modal1p9;
    this.modal2p9=this.dataServies.modal2p9;
    this.figmap9arr=this.dataServies.figmap9arr;


    
    this.globalService.getCheckoutItems().subscribe(items => {
      this.figmap9 = items.map(item => ({
        img1: item.img1,
        quantity: item.quantity.toString(),
        text11: item.text5,
        subtotal: item.subtotal,
      }));

      this.itemsarry.cart = this.figmap9.length.toString();
      this.calculateCartTotal();
    });
    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap9arr.cart = count.toString();
    });
    this.globalService.getShippingAddress().subscribe(address => {
      if (address) {
        this.shippingarry.text3 = address;
      }
    });

    this.globalService.getDebitCardData().subscribe(data => {
      if (data) {
        this.debitCardData = data;
        // Update the paymentarry with the debit card data
        this.paymentarry.text3 = this.debitCardData.text3;
        this.paymentarry.text4 = this.debitCardData.text4;
        this.paymentarry.text5 = this.debitCardData.text5;
        this.paymentarry.text6 = this.debitCardData.text6;
        this.paymentarry.text7 = this.debitCardData.text7;
        this.paymentarry.text8 = this.debitCardData.text8;
        this.paymentarry.icon1 = this.debitCardData.icon1;
      }
    })
    this.updateDeliveryDate();
      
  }
  calculateCartTotal() {
    this.cartTotal = this.figmap9.reduce((sum: any, item: { subtotal: any; }) => sum + item.subtotal, 0);
    this.updateTotal();
  }

  updateTotal() {
    let total = this.cartTotal;
    if (this.expressSelected) {
      total += 12; // Add shipping fee for express
    }
    this.payarry.total = `Total $${total.toFixed(2)}`;
  }

  onShippingChange(type: string) {
    if (type === 'standard') {
      this.standardSelected = true;
      this.expressSelected = false;
    } else {
      this.standardSelected = false;
      this.expressSelected = true;
    }
    this.updateTotal();
    this.updateDeliveryDate();
  }
  updateDeliveryDate() {
    const today = new Date();
    let deliveryDate: Date;

    if (this.standardSelected) {
      deliveryDate = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000); // Add 6 days for standard shipping
    } else {
      deliveryDate = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000); // Add 2 days for express shipping
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const formattedDate = `${dayNames[deliveryDate.getDay()]}, ${deliveryDate.getDate()} ${monthNames[deliveryDate.getMonth()]} ${deliveryDate.getFullYear()}`;

    this.warnarry.text29 = `Delivered on or before ${formattedDate}`;
  }
  
  // 1st modal
  saveChanges() {
    // Combine the shipping data into a single string
    const newAddress = `${this.shippingData.country}, ${this.shippingData.address}, ${this.shippingData.city}, ${this.shippingData.postcode}`;
    this.shippingarry.text3 = newAddress;
    this.modalController.dismiss();

    // Reset the form
    this.shippingData = {
      country: '',
      address: '',
      city: '',
      postcode: '',
    };
  }
  // 2ndmodal
  saveContactChanges() {
    // Update the contactarry with the new contact information
    this.contactarry.text5 = this.contactData.phone;
    this.contactarry.text6 = this.contactData.email;

    // Close the modal
    this.modal.dismiss();

    // Reset the form
    this.contactData = {
      phone: '',
      email: '',
    };
  }
  pay() {
    // Assuming figmap9 contains your cart items
    const itemsToSave = this.figmap9.map((item: { text5: any; }) => ({
      ...item,
      text11: item.text5 // Ensure text11 is set from text5
    }));
    this.globalService.setCheckoutItems(this.figmap9);
    this.globalService.setShippedItems(this.figmap9);
  this.globalService.setDeliveredItems([]);
    this.router.navigate(['/segments']);
  }
p12() {
  this.router.navigate(['/figmadebitp12'])
}
  next() {
    this.router.navigate(['/figmarecievep10']);
  }
  
  cart() {
    this.router.navigate(['/figmap8-cart']);
  }

  back() {
    this.router.navigate(['/figmap8-cart']);
  }
  figmap7() {
    this.router.navigate(['/figmap7']);
  }
  home(){
    this.router.navigate(['/figmap1'])
  }
  setting(){
    this.router.navigate(['/figmasettingp11']);
  }
}
