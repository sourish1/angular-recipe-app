import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app works!';

  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYj10ZePGcx9aRVWHDf8Y85w-kjvmonEY",
      authDomain: "ng-recipe-book-630c5.firebaseapp.com"
    });
  }

}
