import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-design',
  templateUrl: './alert-design.page.html',
  styleUrls: ['./alert-design.page.scss'],
})
export class AlertDesignPage implements OnInit {
  
  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      // If no header is needed, you can omit these fields
      header: '', // Add a header if needed
      subHeader: '', // Add a subheader if needed
      message: `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">You reached the maximum</p>
          <p class="subheader">amount of attempts.</p>
          <p class="message">Please, try later.</p>
        </div>`,
      buttons: ['Okay'],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }

  ngOnInit() {}
}

