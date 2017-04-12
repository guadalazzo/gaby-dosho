import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BodyComponent } from './body.component';
import {FooterComponent} from './footer.component';
import {MenuComponent} from './menu.component';
import {HomeComponent} from './home-components/home.component';
import {AboutComponent} from './about-components/about.component';
import {ProductComponent} from './products-components/product.component';
import {SuggestComponent} from './suggest-components/suggest.component';
import {ContactComponent} from './contact-components/contact.component';
import {PageNotFoundComponent} from './page-not-found/pagenotfound.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about',component: AboutComponent},
  { path: 'suggest',component: SuggestComponent},
  { path:'product', component: ProductComponent },
  { path:'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    SuggestComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
