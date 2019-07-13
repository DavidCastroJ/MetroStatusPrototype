import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StationCommentsPage } from './station-comments';

@NgModule({
  declarations: [
    StationCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(StationCommentsPage),
  ],
})
export class StationCommentsPageModule {}
