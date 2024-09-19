import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
register();

@Component({
  selector: 'app-samplemod',
  templateUrl: './samplemod.page.html',
  styleUrls: ['./samplemod.page.scss'],
})
export class SamplemodPage implements OnInit {
  [x: string]: any;

public filter:any="Filter";
public close:any="close-outline";



  public data2:any=[
    {
      imga:"../../assets/new.store/ss9.png",
      texta:"Cartier",
      imgb:"../../assets/new.store/ss7.png",
      textb:"Addidas",
      imgc:"../../assets/new.store/ss6.png",
      textc:"Skirts",
      imgd:"../../assets/new.store/ss5.png",
      textd:"Shorts",
      imge:"../../assets/new.store/ss4.png",
      texte:"Jackets",
      imgf:"../../assets/new.store/ss2.png",
      textf:"Guccii",
      imgg:"../../assets/new.store/ss1.png",
      textg:"Tunics",
      imgh:"../../assets/new.store/ss8.png",
      texth:"Hoodies",
    },
    {
      imga:"../../assets/new.store/ss8.png",
      texta:"Tunics",
      imgb:"../../assets/new.store/ss1.png",
      textb:"Hoodies",
      imgc:"../../assets/new.store/ss2.png",
      textc:"Guccii",
      imgd:"../../assets/new.store/ss4.png",
      textd:"Jackets",
      imge:"../../assets/new.store/ss5.png",
      texte:"Shorts",
      imgf:"../../assets/new.store/ss6.png",
      textf:"Skirts",
      imgg:"../../assets/new.store/ss7.png",
      textg:"Addidas",
      imgh:"../../assets/new.store/ss9.png",
      texth:"Cartier",
    }  
  ]

  public arry4:any={
    size:"Size",
    clothes:"Clothes",
    Shoes:"Shoes"
  }

  public arry5:any={
    xs:"XS",
    s:"S",
    m:"M",
    l:"L",
    xl:"XL",
    xxl:"XXL",
  }

  public color:any="Color";

  public arry6:any={
    price:"Price",
    $10:"$10 - $150",
  }
  public range:any="Dual Knobs Range";

  public arry7:any={
    popular:"Popular",
    newest:"Newest",
    high:"Price High to Low",
    low:"Price Low to High",
  }

  public arry8:any={
    clear:"Clear",
    apply:"Apply",
  }
  
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ personCircle });
   }
   

  ngOnInit() {
  }
  confirm() {
    this['modal'].dismiss(this.name, 'confirm');
  }
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
}
