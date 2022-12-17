import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class ReportModule { }
