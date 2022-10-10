import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppingList from './store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;//The arrays here are moved to shopping-list.service.ts for cross communication using service.
  //Now above ingredients is an observable and not an array of ingredients anymore
  private subscription: Subscription;
  constructor(
    private loggingService: LoggingService,
    private store: Store<fromShoppingList.AppState>
    //we are not using Redux but NgRx coz it gives us some extra features and deeper integration into Angular. For eg: it gives us an injectable store that makes it easy for us to access our application state 
    ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList'); //this select method helps to select a slice of our state. That slice is identified as a string. we can also use this async pipe method to avoid memory leaks and bugs.
    //this.store.select('shoppingList').subscribe(); //we can also manually subscribe than using async pipe like above code.
    /*this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );    */
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');//we have been loading our services - logging.service.ts
  }

  onEditItem(index: number) {
    //this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
