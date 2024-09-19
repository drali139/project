import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { IonModal } from '@ionic/angular';
import { DataserviceService } from '../dataservice.service';
import { GlobalService } from '../global.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';

register();
@Component({
  selector: 'app-figmap7',
  templateUrl: './figmap7.page.html',
  styleUrls: ['./figmap7.page.scss'],
})
export class Figmap7Page implements OnInit {
  [x: string]: any;

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
public figmap7arry:any={}
public figmap7data:any=[]
public figmap7arry3:any={}
// modal setup
public figmap7arrym4:any={}
public figmap7data2:any=[]
public figmap7arry4:any={}
public figmap7arry5:any={}
public figmap7arry6m:any={}
public figmap7arry6:any={}
public figmap7arry7m:any={}
public figmap7arry7:any={}
public figmap7arry8:any={}
// Forlooparry
public figmap7data1:any=[]
public figmap7arr:any={}
public imageUrl: string | null = null;


  constructor(public router:Router,private dataServies:DataserviceService, private globalService: GlobalService,private actionSheetCtrl: ActionSheetController) { 
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ personCircle });
  }
  onImageClick(item: any) {
    this.router.navigate(['/figmap6'], {
      queryParams: {
        img1: item.img17,
        text1: item.text20
      }
    });
  }

  ngOnInit() {
    this.figmap7arry=this.dataServies.figmap7arry;
    this.figmap7data=this.dataServies.figmap7data;
    this.figmap7arry3=this.dataServies.figmap7arry3;
    this.figmap7data2=this.dataServies.figmap7data2;
    this.figmap7arrym4=this.dataServies.figmap7arrym4;
    this.figmap7arry4=this.dataServies.figmap7arry4;
    this.figmap7arry5=this.dataServies.figmap7arry5;
    this.figmap7arry6m=this.dataServies.figmap7arry6m;
    this.figmap7arry6=this.dataServies.figmap7arry6;
    this.figmap7arry7m=this.dataServies.figmap7arry7m;
    this.figmap7arry7=this.dataServies.figmap7arry7;
    this.figmap7arry8=this.dataServies.figmap7arry8;
    this.figmap7data1=this.dataServies.figmap7data1;
    this.figmap7arr=this.dataServies.figmap7arr;


    this.globalService.getCartItemCount().subscribe(count => {
      this.figmap7arr.cart = count.toString();
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
      localStorage.setItem('Image', JSON.stringify(this.imageUrl));
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  loadImageFromStorage() {
    const storedImage = localStorage.getItem('Image');
    if (storedImage) {
      this.imageUrl = JSON.parse(storedImage); // Parse the JSON string back to the original format
    }
  }
  next()
  {
    this.router.navigate(['/figmap8-cart'])
  }
  home(){
    this.router.navigate(['/figmap1'])
  }
  setting(){
    this.router.navigate(['/figmasettingp11'])
  }

  cart()
  {
    this.router.navigate(['/figmap8-cart'])
  }
  
  @ViewChild('modal', { static: true }) modal: IonModal | undefined;

  message: string = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';

  closeModal() {
    if (this.modal) {
      this.modal.dismiss(this.name, 'confirm');
    } else {
      console.error('Modal is not defined');
    }
  }

}
