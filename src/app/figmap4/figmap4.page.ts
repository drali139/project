import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
register();
@Component({
  selector: 'app-figmap4',
  templateUrl: './figmap4.page.html',
  styleUrls: ['./figmap4.page.scss'],
})
export class Figmap4Page implements OnInit {
public figmap4arry:any={}
public figmap4arry1:any={}
public figmap4arry2:any={}
public figmap4data:any=[]
public figmap4arry3:any={}
public figmap4arry4:any={}
public figmap4arry5:any={}
public figmap4data1:any=[]
public figmap4arry6:any={}
public figmap4data2:any=[]
public figmap4arry7:any={}
public figmap4data3:any=[]
public figmap4arry8:any={}
public figmap4data4:any=[]
public figmap4arr:any={}
public imageUrl: string | null = null;
//  imageUrl: string | undefined;
  constructor(public router:Router,private dataServies:DataserviceService,private globalService: GlobalService,private actionSheetCtrl: ActionSheetController) { }
  onImageClick(item: any, imgKey: string) {
    this.router.navigate(['/figmap6'], {
      queryParams: {
        img1: item[imgKey],
        text1: item.price
      }
    });
  }
  onImgClick(item: any) {
    this.router.navigate(['/figmap6'], {
      queryParams: {
        img1: item.img14,
        text1: item.price1
      }
    });
  }
  ngOnInit() {
    this.figmap4arry=this.dataServies.figmap4arry;
    this.figmap4arry1=this.dataServies.figmap4arry1;
    this.figmap4arry2=this.dataServies.figmap4arry2;
    this.figmap4data=this.dataServies.figmap4data;
    this.figmap4arry3=this.dataServies.figmap4arry3;
    this.figmap4arry4=this.dataServies.figmap4arry4;
    this.figmap4arry5=this.dataServies.figmap4arry5;
    this.figmap4data1=this.dataServies.figmap4data1;
    this.figmap4arry6=this.dataServies.figmap4arry6;
    this.figmap4data2=this.dataServies.figmap4data2;
    this.figmap4arry7=this.dataServies.figmap4arry7;
    this.figmap4data3=this.dataServies.figmap4data3;
    this.figmap4arry8=this.dataServies.figmap4arry8;
    this.figmap4data4=this.dataServies.figmap4data4;
    this.figmap4arr=this.dataServies.figmap4arr;


    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap4arr.cart = count.toString();
    });
    this.loadImageFromStorage();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Capture Image',
          icon: 'camera',
          handler: () => {
            this.takePicture(CameraSource.Camera);
          }
        },
        {
          text: 'Open Gallery',
          icon: 'images',
          handler: () => {
            this.takePicture(CameraSource.Photos);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,  // Capture the image as a Base64 string
        source: source,
      });

      this.imageUrl = `data:image/jpeg;base64,${image.base64String}`;

      // Store the image in local storage as a JSON string
      localStorage.setItem('capturedImage1', JSON.stringify(this.imageUrl));
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  loadImageFromStorage() {
    const storedImage = localStorage.getItem('capturedImage1');
    if (storedImage) {
      this.imageUrl = JSON.parse(storedImage); // Parse the JSON string back to the original format
    }
  }
  

  next()
  {
    this.router.navigate(['/figmap5'])
  }
  cart()
  {
    this.router.navigate(['/figmap8-cart'])
  }
  figmap7()
  {
    this.router.navigate(['/figmap7'])
  }
  home()
  {
    this.router.navigate(['/figmap1'])
  }
  setting()
  {
    this.router.navigate(['/figmasettingp11'])
  }
}
