import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-figmasettingp11',
  templateUrl: './figmasettingp11.page.html',
  styleUrls: ['./figmasettingp11.page.scss'],
})
export class Figmasettingp11Page implements OnInit {
public settingarry:any={}
public settingarry1:any={}
public settingarry2:any={}
public figmasettingarr:any={}

public imageUrl: string | null = null;

  constructor(public router:Router,private dataServies:DataserviceService,private actionSheetCtrl: ActionSheetController,private globalService: GlobalService) { }

  ngOnInit() {
    this.settingarry=this.dataServies.settingarry;
    this.settingarry1=this.dataServies.settingarry1;
    this.settingarry2=this.dataServies.settingarry2;
    this.figmasettingarr=this.dataServies.figmasettingarr;

    this.globalService.getCartItemCount().subscribe(count => {
      this.figmasettingarr.cart = count.toString();
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
      localStorage.setItem('capturedImage', JSON.stringify(this.imageUrl));
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  loadImageFromStorage() {
    const storedImage = localStorage.getItem('capturedImage');
    if (storedImage) {
      this.imageUrl = JSON.parse(storedImage); // Parse the JSON string back to the original format
    }
  }
home()
{
  this.router.navigate(['/figmap1'])
}
cart(){
  this.router.navigate(['/figmap8-cart'])
}
figmap7(){
  this.router.navigate(['/figmap7'])
}
}
