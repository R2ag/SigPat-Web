import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule

  ]
})
export class UsersModule { }
