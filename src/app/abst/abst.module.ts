import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

import { AbstPageRoutingModule } from './abst-routing.module';

import { AbstPage } from './abst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstPageRoutingModule,
    ExploreContainerComponentModule,
    MyHeaderComponent,
  ],
  declarations: [AbstPage],
})
export class AbstPageModule {}
