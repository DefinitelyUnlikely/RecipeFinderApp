import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  // ingredients: string[] = ["testing", "test 2", "more stuff", "hmm, chili!", "hello world!", "mayonaise"];
  ingredients: string[] = [];
  newIngredient: string = "";

  addIngredient(): void {
    this.newIngredient = this.newIngredient.trim();
    this.ingredients.push(this.newIngredient);
    this.newIngredient = "";
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1)
  }

  search(): void {
    // Insert API call here.
    console.log("Still nothing here");
  }

}
