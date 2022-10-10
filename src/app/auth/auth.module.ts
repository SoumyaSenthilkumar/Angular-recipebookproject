import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: AuthComponent }]),
    SharedModule
]//make sure the above path='auth' is empty where we have added the path for lazy loading in -/app-routing.module.ts
})
export class AuthModule {}