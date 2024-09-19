import { Component, OnInit } from '@angular/core';
import { AlertserviceService } from '../alertservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-service-lec',
  templateUrl: './service-lec.page.html',
  styleUrls: ['./service-lec.page.scss'],
})
export class ServiceLecPage implements OnInit {
  public arry5: any = {
    text10: "Quantity",
    icon2: "remove-circle-outline",
    count: 1,
    icon3: "add-circle-outline",
    header: 'Alert',
    subHeader: '',
    message: 'You Reached out Maximum amount of attempts. Please, try later.',
    buttons: ['Ok'],
  };

  // public alerta:any={header:'ali',  buttons:['ok']}
  constructor(public alert: AlertserviceService) { }

  increase() {
    this.arry5.count++;
  }

  decrease() {
    if (this.arry5.count > 1) {
      this.arry5.count--;
    } else {
      // this.alert.hd(this.arry5);
    }
  }

  ngOnInit() {
  }
}
