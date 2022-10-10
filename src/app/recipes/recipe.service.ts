import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe} from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'; //we bundle all exports from that shopping list actions file into the shopping list actions 
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()//if u want to inject a service into a service, need to add @injectable
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    /*private recipes: Recipe[] = [
        new Recipe(
            'chicken-chickpea-curry', 
            'A super-tasty chicken - just awesome!', 
            'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])  
    ];   */
    private recipes: Recipe[] = [];

    constructor(private store: Store<fromShoppingList.AppState>
    ) {}
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {//getRecipes is something the other way to access the recipes- as we have declared
    //recipes as private, we can't access from outside, but using recipes.slice using getRecipes() method we can get a copy.
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index]; 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        //this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    } 
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }  
}