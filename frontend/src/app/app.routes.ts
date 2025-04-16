import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { AboutpageComponent } from '../pages/aboutpage/aboutpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", title: "Recipe finder!", component: HomepageComponent },
    { path: "about", title: "About us", component: AboutpageComponent },
    { path: '**', title: "404", component: PageNotFoundComponent },
];
