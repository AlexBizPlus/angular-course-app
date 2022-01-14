import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class recipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
