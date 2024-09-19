import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {

  constructor(private alertcon: AlertController) { }

  async presentAlert(header: string, subHeader: string, message: string, buttons: any[], cssClass: string = '') {
    const alert = await this.alertcon.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons,
      cssClass: cssClass,
    });
    await alert.present();
  }
// figmap2 alert1
  async presentCountdownAlert(duration: number, onFinish: () => void, cssClass: string = 'custom-alert') {
    let countdown = duration;
    const alert = await this.alertcon.create({
      header: '',
      subHeader: '',
      message: `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">Wrong Password</p>
          <p class="subheader">Please wait for ${countdown} seconds.</p>
          <p class="message"></p>
        </div>`,
      backdropDismiss: false,
      cssClass: cssClass,
    });

    await alert.present();

    const interval = setInterval(async () => {
      countdown--;
      alert.message = `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">Wrong Password</p>
          <p class="subheader">Please wait for ${countdown} seconds.</p>
          <p class="message"></p>
        </div>`;
      if (countdown === 0) {
        clearInterval(interval);
        await alert.dismiss();
        onFinish();
      }
    }, 1000);
  }
// figmap2 alert2
  async presentPermanentDisableAlert(cssClass: string = 'custom-alert') {
    const alert = await this.alertcon.create({
      header: '',
      subHeader: '',
      message: `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">Wrong Password</p>
          <p class="subheader">The button is permanently disabled due to the maximum number of incorrect attempts.</p>
          <p class="message"></p>
        </div>`,
      backdropDismiss: false,
      cssClass: cssClass,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Permanent disable alert dismissed.');
          }
        }
      ]
    });

    await alert.present();
  }
// figmap8-cart alert1
  async presentCustomAlert(addCard: boolean, onYes: () => void) {
    const alert = await this.alertcon.create({
      header: '',
      subHeader: '',
      message: `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">You reached the maximum</p>
          <p class="subheader">amount of quantity.</p>
          <p class="message"></p>
        </div>`,
      buttons: [
        {
          text: 'No',
          role: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            if (addCard) {
              onYes();
            }
          }
        }
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
// figmap8-cart alert2
  async presentDeleteAlert(onYes: () => void) {
    const alert = await this.alertcon.create({
      header: '',
      subHeader: '',
      message: `
        <div class="alert-content">
          <ion-list class="circle"><img class="circleimg" src="../../assets/new.store/alert.png" alt=""></ion-list>
          <p class="header">You reached the minimum</p>
          <p class="subheader">amount of quantity.</p>
          <p class="message">Do you want to delete this item?</p>
        </div>`,
      buttons: [
        {
          text: 'No',
          role: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            onYes();
          },
        }
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
}
