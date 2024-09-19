import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-nike1',
  templateUrl: './nike1.page.html',
  styleUrls: ['./nike1.page.scss'],
})
export class Nike1Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  clickto()
  {
    this.router.navigate(['/nike2'])
  }

}
