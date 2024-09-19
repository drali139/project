import { Component } from '@angular/core';
import { GlobalService } from './global.service';
// import { IonicModule, Platform } from '@ionic/angular';
// import { FcmService } from './service/fcm/fcm.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // standalone: true,
  // imports: [IonicModule],
})
export class AppComponent {
  // private platform: Platform,
    // private fcm: FcmService
  constructor(private globalService: GlobalService,) {
    this.clearCartOnRefresh();

    // firebase push notification plugins
    // this.platform.ready().then(() => {
    //   this.fcm.initPush();
    // }).catch(e => {
    //   console.log('error fcm: ', e);
    // });
  }

  private clearCartOnRefresh() {
    if (performance.navigation.type === 1) {
      // Page was reloaded
      this.globalService.clearCart();
    }
  }
}
