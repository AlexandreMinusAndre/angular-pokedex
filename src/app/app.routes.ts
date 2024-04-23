import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
 
export const routes: Routes = [
    {
        path: "",
        title: "Angular Pokédex",
        component: HomeComponent
    },
    {
        path:"detail/:id",
        component: DetailComponent
    }
];
