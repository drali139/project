import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router : Router) {}
  cart()
  {
    this.router.navigate(['/figmap8-cart'])
  }
  figmap1(){
    this.router.navigate(['/figmap1'])
  }
}
