import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { PaqypromComponent } from "./paqyprom.component";
import { ProductsComponent } from "./product.component";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'paqyprom', component: PaqypromComponent },
    { path: 'products', component: ProductsComponent } ,
    { path: 'contact', component: ContactComponent } ,
    { path: 'about', component: AboutComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);