import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.page.html',
  styleUrls: ['./toasts.page.scss'],
})
export class ToastsPage implements OnInit {
  buttonColor: string = 'primary';

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'How can I help you?',
      duration: 1000,
      position: position,
    });

    await toast.present();
  }

  toggleButtonColor() {
    if (this.buttonColor === 'primary') {
      this.buttonColor = 'success';
    } else if (this.buttonColor === 'success') {
      this.buttonColor = 'danger';
    } else {
      this.buttonColor = 'primary';
    }
  }

  ngOnInit() {}
}
