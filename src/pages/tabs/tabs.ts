import { MapPage } from './../map/map';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = MapPage;

  constructor() {

  }
}
