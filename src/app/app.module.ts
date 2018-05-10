import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { InputBarComponent } from './input-bar/input-bar.component';
import { SummaryTableComponent } from './summary-table/summary-table.component';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BikewiseService } from './shared/bikewise.service';
import { Int2datePipe } from './pipe/int2date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputBarComponent,
    SummaryTableComponent,
    DetailTableComponent,
    NavbarComponent,
    Int2datePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [BikewiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
