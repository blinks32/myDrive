import { Component, OnInit, Optional } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
})
export class WaitingPage implements OnInit {
  @Optional() private routerOutlet?: IonRouterOutlet
  constructor(private platform: Platform) { }
  approve: any;
  ngOnInit() {
   
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  Exit(){
    this.approve = true;
        App.exitApp();
      
    
  }
}
