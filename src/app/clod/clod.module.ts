import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClodPage } from './clod.page';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ClodPageRoutingModule } from './clod-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ClodPageRoutingModule,
    MyHeaderComponent,
  ],
  declarations: [ClodPage],
})
export class ClodPageModule {}
