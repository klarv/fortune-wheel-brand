import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
    { path: '', redirectTo: 'prizes/home', pathMatch: 'full' },
    { path: 'prizes/home', component: HomeComponent },
    { path: 'prizes/:brand_name', component: PrizeComponent }

];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);

