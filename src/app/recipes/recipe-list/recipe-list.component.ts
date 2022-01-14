import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class recipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is a simply a test',
      'https://i.pinimg.com/236x/85/16/8a/85168a43f10708ac62467cc53764803d.jpg'
    ),
    new Recipe(
      'A Test recipe #2',
      'This is a simply a test #2',
      'https://images.freeimages.com/images/premium/small-comps/1726/17260483-spicy-barbecue-sauce.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
