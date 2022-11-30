import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  items: any[];
  skeletOns: {}[];
  hideSkeleton: boolean;
  hasNoData: boolean;
  subscription: Subscription

  constructor(private nav: NavController, private database: AvatarService) { }

  ngOnInit() {
    this.skeletOns = [
      {},{},{},{},{},{},{},{},{},{}
    ]
    this.hideSkeleton = true;
    this.subscription = this.database.getHistory().subscribe((d)=>{
      this.items = d

      console.log(this.items);
      
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      }else{
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
      this.subscription.unsubscribe();
    })
  }

  

  goBack(){
    this.nav.pop();
  }
}
