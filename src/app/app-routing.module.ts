import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Figmap7Page } from './figmap7/figmap7.page';
import { Figmap6Page } from './figmap6/figmap6.page';
const routes: Routes = [
  { path: 'figmap7', component: Figmap7Page },
  { path: 'figmap6', component: Figmap6Page },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'figmap1',
    pathMatch: 'full'         
  },
  // {
  //   path: 'page2',
  //   loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  // },
  // {
  //   path: 'page3',
  //   loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  // },
  // {
  //   path: 'login-page',
  //   loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  // },
  // {
  //   path: 'slop',
  //   loadChildren: () => import('./slop/slop.module').then( m => m.SlopPageModule)
  // },
  // {
  //   path: 'slop2',
  //   loadChildren: () => import('./slop2/slop2.module').then( m => m.Slop2PageModule)
  // },
  // {
  //   path: 'slop3',
  //   loadChildren: () => import('./slop3/slop3.module').then( m => m.Slop3PageModule)
  // },
  // {
  //   path: 'coconut1',
  //   loadChildren: () => import('./coconut1/coconut1.module').then( m => m.Coconut1PageModule)
  // },
  // {
  //   path: 'coconut-2',
  //   loadChildren: () => import('./coconut-2/coconut-2.module').then( m => m.Coconut2PageModule)
  // },
  // {
  //   path: 'swper',
  //   loadChildren: () => import('./swper/swper.module').then( m => m.SwperPageModule)
  // },
  // {
  //   path: 'nike1',
  //   loadChildren: () => import('./nike1/nike1.module').then( m => m.Nike1PageModule)
  // },
  // {
  //   path: 'nike2',
  //   loadChildren: () => import('./nike2/nike2.module').then( m => m.Nike2PageModule)
  // },
  {
    path: 'figmap1',
    loadChildren: () => import('./figmap1/figmap1.module').then( m => m.Figmap1PageModule)
  },
  {
    path: 'figmap2',
    loadChildren: () => import('./figmap2/figmap2.module').then( m => m.Figmap2PageModule)
  },
  {
    path: 'figmap3',
    loadChildren: () => import('./figmap3/figmap3.module').then( m => m.Figmap3PageModule)
  },
  {
    path: 'figmap4',
    loadChildren: () => import('./figmap4/figmap4.module').then( m => m.Figmap4PageModule)
  },
  {
    path: 'figmap5',
    loadChildren: () => import('./figmap5/figmap5.module').then( m => m.Figmap5PageModule)
  },
  {
    path: 'figmap6',
    loadChildren: () => import('./figmap6/figmap6.module').then( m => m.Figmap6PageModule)
  },
  {
    path: 'figmap7',
    loadChildren: () => import('./figmap7/figmap7.module').then( m => m.Figmap7PageModule)
  },
  {
    path: 'figmap8-cart',
    loadChildren: () => import('./figmap8-cart/figmap8-cart.module').then( m => m.Figmap8CartPageModule)
  },
  {
    path: 'figmapaymentp9',
    loadChildren: () => import('./figmapaymentp9/figmapaymentp9.module').then( m => m.Figmapaymentp9PageModule)
  },
  {
    path: 'figmarecievep10',
    loadChildren: () => import('./figmarecievep10/figmarecievep10.module').then( m => m.Figmarecievep10PageModule)
  },
  {
    path: 'figmasettingp11',
    loadChildren: () => import('./figmasettingp11/figmasettingp11.module').then( m => m.Figmasettingp11PageModule)
  },
  {
    path: 'figmadebitp12',
    loadChildren: () => import('./figmadebitp12/figmadebitp12.module').then( m => m.Figmadebitp12PageModule)
  },
  // {
  //   path: 'insta',
  //   loadChildren: () => import('./insta/insta.module').then( m => m.InstaPageModule)
  // },
  // {
  //   path: 'practs',
  //   loadChildren: () => import('./practs/practs.module').then( m => m.PractsPageModule)
  // },
  // {
  //   path: 'floatingbutton',
  //   loadChildren: () => import('./floatingbutton/floatingbutton.module').then( m => m.FloatingbuttonPageModule)
  // },
  // {
  //   path: 'modals',
  //   loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
  // },
  // {
  //   path: 'toasts',
  //   loadChildren: () => import('./toasts/toasts.module').then( m => m.ToastsPageModule)
  // },
  // {
  //   path: 'alert-task',
  //   loadChildren: () => import('./alert-task/alert-task.module').then( m => m.AlertTaskPageModule)
  // },
  // {
  //   path: 'alert-design',
  //   loadChildren: () => import('./alert-design/alert-design.module').then( m => m.AlertDesignPageModule)
  // },
  // {
  //   path: 'samplemod',
  //   loadChildren: () => import('./samplemod/samplemod.module').then( m => m.SamplemodPageModule)
  // },
  // {
  //   path: 'customheightmodal',
  //   loadChildren: () => import('./customheightmodal/customheightmodal.module').then( m => m.CustomheightmodalPageModule)
  // },
  // {
  //   path: 'stylingmodal',
  //   loadChildren: () => import('./stylingmodal/stylingmodal.module').then( m => m.StylingmodalPageModule)
  // },
  // {
  //   path: 'service-lec',
  //   loadChildren: () => import('./service-lec/service-lec.module').then( m => m.ServiceLecPageModule)
  // },
  {
    path: 'segments',
    loadChildren: () => import('./segments/segments.module').then( m => m.SegmentsPageModule)
  },
  // {
  //   path: 'pushnotification',
  //   loadChildren: () => import('./pushnotification/pushnotification.module').then( m => m.PushnotificationPageModule)
  // },
  // {
  //   path: 'ifp1',
  //   loadChildren: () => import('./ifp1/ifp1.module').then( m => m.Ifp1PageModule)
  // },
  // {
  //   path: 'ifp2',
  //   loadChildren: () => import('./ifp2/ifp2.module').then( m => m.Ifp2PageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  // },
 
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
