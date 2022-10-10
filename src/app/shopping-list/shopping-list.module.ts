import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        //CommonModule,//this module unlocks ngIf.
        FormsModule,
       RouterModule.forChild([
        { path: '', component: ShoppingListComponent },
       ]),//empty the above path for lazy loading where we will be using the shoppingmodule in /app-routing.module.ts
       SharedModule
    ],
    //providers: [LoggingService]
})
export class ShoppingListModule {}