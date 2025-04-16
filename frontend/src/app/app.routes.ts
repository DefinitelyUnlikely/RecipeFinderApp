import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { AboutpageComponent } from '../pages/aboutpage/aboutpage.component';

export const routes: Routes = [
    { path: "", component: HomepageComponent },
    { path: "about", component: AboutpageComponent },
];
