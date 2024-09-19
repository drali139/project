import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-figmadebitp12',
  templateUrl: './figmadebitp12.page.html',
  styleUrls: ['./figmadebitp12.page.scss'],
})
export class Figmadebitp12Page implements OnInit {
  public debitarry:any={}
  public debitarry1:any={}
  public debitarry2:any={}
  public debitarry3:any={}
  public debitarry4:any={}
public figmap12arr:any={}



public cardData = {
  name: '',
  cardNumber: '',
  expiryDate: ''
};
  constructor(public router:Router, private modalController: ModalController,private dataServies:DataserviceService, private globalService: GlobalService) { }
  
  ngOnInit() {
    this.debitarry=this.dataServies.debitarry;
    this.debitarry1=this.dataServies.debitarry1;
    this.debitarry2=this.dataServies.debitarry2;
    this.debitarry3=this.dataServies.debitarry3;
    this.debitarry4=this.dataServies.debitarry4;
    this.figmap12arr=this.dataServies.figmap12arr;

    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap12arr.cart = count.toString();
    });
    
  }
  proceedToPayment() {
    const debitCardData = {
      text3: this.debitarry1.text3,
      text4: this.debitarry1.text4,
      text5: this.debitarry1.text5,
      text6: this.debitarry1.text6,
      text7: this.debitarry1.text7,
      text8: this.debitarry1.text8,
      icon1: this.debitarry1.icon1
    };

    this.globalService.setDebitCardData(debitCardData);
    this.router.navigate(['/figmapaymentp9']);
  }
  saveChanges() {
    // Update name
    this.debitarry1.text7 = this.cardData.name;

    // Update card number
    if (this.cardData.cardNumber.length === 16) {
      this.debitarry1.text3 = '* * * *';
      this.debitarry1.text4 = '* * * *';
      this.debitarry1.text5 = '* * * *';
      this.debitarry1.text6 = this.cardData.cardNumber.slice(12);
    }

    // Update expiry date
    if (this.cardData.expiryDate) {
      const date = new Date(this.cardData.expiryDate);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(2);
      this.debitarry1.text8 = `${month}/${year}`;
    }

    // Close the modal
    this.modalController.dismiss();

    // Reset the form
    this.cardData = {
      name: '',
      cardNumber: '',
      expiryDate: ''
    };
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
}
