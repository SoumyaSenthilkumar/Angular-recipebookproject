import { Component, OnInit, Input } from '@angular/core';
//import { EventEmitter } from 'stream';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;//Getting [recipe] as input from recipe-list.component.html
  @Input() index: number;

  ngOnInit(): void {
  }

}
