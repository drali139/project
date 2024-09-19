// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { GlobalService } from '../global.service';
// @Component({
//   selector: 'app-ifp2',
//   templateUrl: './ifp2.page.html',
//   styleUrls: ['./ifp2.page.scss'],
// })
// export class Ifp2Page implements OnInit {
//   type: string | null = null;
// public global:GlobalService=inject(GlobalService)
//   card: any;
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit() {
//     this.global.showdata.subscribe(res=>{
//       console.log('dsfasd',res)
//       this.card=res;
//     })
//     // this.type = this.route.snapshot.paramMap.get('type');
//     // if (this.type === null) {
//     //   console.error('Type parameter is missing in the route');
//       // Handle the error appropriately, e.g., navigate to an error page or show an error message
//     // }
//   }
// }
