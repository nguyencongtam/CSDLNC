import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimBaoDongPage } from './tim-bao-dong.page';

const routes: Routes = [
  {
    path: '',
    component: TimBaoDongPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimBaoDongPage]
})
export class TimBaoDongPageModule {}
