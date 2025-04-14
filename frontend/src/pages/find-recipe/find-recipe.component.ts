import { Component } from '@angular/core';

@Component({
  selector: 'app-find-recipe',
  imports: [],
  templateUrl: './find-recipe.component.html',
  styleUrl: './find-recipe.component.css'
})
export class FindRecipeComponent {
  ingredients: string[] = ["testing", "test 2"];

  newIngredient: string = "";

  addIngredient(): void {
    this.newIngredient = this.newIngredient.trim();
    this.ingredients.push(this.newIngredient);
    this.newIngredient = "";
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1)
  }

}
