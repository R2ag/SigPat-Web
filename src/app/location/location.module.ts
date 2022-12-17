import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    LocationComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule
  ]
})
export class LocationModule { }
