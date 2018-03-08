import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserlistComponent } from './views/userlist/userlist.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CardnavComponent } from './views/cardnav/cardnav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CardnavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
