import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab6PageRoutingModule } from './tab6-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Tab6Page } from './tab6.page';
import { AddFoodFormComponent } from '../addfood/addfood.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MyHeaderComponent,
    Tab6PageRoutingModule,
    AddFoodFormComponent,
  ],
  declarations: [Tab6Page],
})
export class Tab6PageModule {}
