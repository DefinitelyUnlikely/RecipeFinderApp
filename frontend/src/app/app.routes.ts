import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { AboutpageComponent } from '../pages/aboutpage/aboutpage.component';
import { FindRecipeComponent } from '../pages/find-recipe/find-recipe.component';

export const routes: Routes = [
    { path: "", component: HomepageComponent },
    { path: "recipes", component: FindRecipeComponent },
    { path: "about", component: AboutpageComponent },
];
