import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './body.component';
import { MenuComponent } from './menu.component';
import { FooterComponent} from './footer.component';
import { CONST_ROUTING } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    PaqypromComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
