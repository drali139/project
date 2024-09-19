import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert-task',
  templateUrl: './alert-task.page.html',
  styleUrls: ['./alert-task.page.scss'],
})
export class AlertTaskPage implements OnInit {
alertButtons = ['Action'];
constructor(private alertController: AlertController) {}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'custom-alert-message'
  });

  await alert.present();
}

  ngOnInit() {
  }

}
