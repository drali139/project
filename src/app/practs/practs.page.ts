import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-practs',
  templateUrl: './practs.page.html',
  styleUrls: ['./practs.page.scss'],
})
export class PractsPage implements OnInit {
  alertButtons = ['Action'];
// 2nd
  isAlertOpen = false;
  alertButtons1 = ['Action'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
// 3rd
public alertButtons2 = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  // 4th
  public alertButtons3 = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
// 5th
public alertButtons4 = ['OK'];
  public alertInputs1 = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];
  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });
  
    await alert.present();
  }
  
  ngOnInit() {
  }

}
