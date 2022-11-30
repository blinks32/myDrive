import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  coordinates: any;
  approve2: boolean;
  selected: any = 'Select Car Type';
  cartypes: import("@angular/fire/firestore").DocumentData[];
  currentcar: any;
  imageURl: any = '';
  licenseURl: any ='';
  licenseImage: any = '';
  profileImage: any = '';
  images: any[];
  texts: any[];
  subscription: Subscription;
  subscription2: Subscription
  docs: import("@angular/fire/firestore").DocumentData[];
  value: any;
  addDocs: import("@angular/fire/firestore").DocumentData[];
  docus: any;
  constructor(
    private overlay: OverlayService, private authy: Auth, private auth: AuthService, private avatar: AvatarService, private router: Router
  ) { }

  ngOnInit() {
    this.images = [];
    this.texts = []

     this.subscription = this.avatar.getCartypes().subscribe((d)=>{
      console.log(d);
      this.cartypes = d
      this.subscription.unsubscribe();
     })

     this.subscription2 = this.avatar.getDocuments().subscribe((d)=>{
      console.log(d);
      this.docs = d
      this.subscription2.unsubscribe();
     })



     this.avatar.getDocs().subscribe((d)=>{
      console.log(d);
      this.addDocs = d
 })

    this.form = new FormGroup({
      fullname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      lastname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      car: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      plate: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
    });
  }
  

  async chooseCarType(even){
    console.log(even.detail.value);
      this.currentcar = even.detail.value.name
  }

  async changeImage(g) {
    try{
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt, // Camera, Photos or Prompt!
    });
 

    for (let index = 0; index < this.docs.length; index++) {
      const element = this.docs[index];
      console.log(element);
      if (element.name == g.name){
      console.log(element);
      this.docs[index].image = image.dataUrl;
      this.overlay.showLoader('');
      const bol = await this.avatar.createDocument(g.name, g.type, g.id, image.dataUrl, '');
      console.log(bol)

      this.overlay.hideLoader()
      }
      
    }

  }catch(e){
    this.overlay.showAlert('Error', e)
  }
 
  }


  async changeProfile(g) {
    try{
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt, // Camera, Photos or Prompt!
    });
    this.imageURl = image.dataUrl

  }catch(e){
    this.overlay.showAlert('Error', e)
  }
 
  }



  async chooseText(e, value) {
    await this.avatar.createDocument(e.name, e.type, e.id, '', value.detail);
  }




  async signIn() {
    try {
      await Geolocation.checkPermissions();
      const coordinates = await Geolocation.getCurrentPosition();
        if (this.currentcar && this.form.value.fullname && this.form.value.lastname && this.form.value.email && this.form.value.car && this.form.value.plate && this.imageURl && this.addDocs){
          this.approve2 = true
        await this.avatar.CreateNewDriver(coordinates, this.form.value.fullname + '' + this.form.value.lastname, this.form.value.email, this.authy.currentUser.phoneNumber, this.form.value.car, this.currentcar, this.form.value.plate, this.imageURl, this.licenseURl)
        await this.avatar.createCard('Cash', 0, 'cash', 'None')
        this.approve2 = false;
        this.router.navigateByUrl('waiting');
        }else{
          this.overlay.showAlert('Incomplete', "Complete the form")
        }
    } catch(e) {
      this.overlay.showAlert('Error', e)
    }
  }




}
