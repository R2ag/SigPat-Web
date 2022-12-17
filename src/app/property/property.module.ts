import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class PropertyModule { }
