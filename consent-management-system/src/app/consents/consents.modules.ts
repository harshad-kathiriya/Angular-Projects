import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.modules";
import { ConsentsRoutingModule } from "./consents-routing.module";
import { GiveConsentComponent } from "./give-consent/give-consent.component";
import { ListConsentsComponent } from "./list-consents/list-consents.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input'

// consent modules
@NgModule({
   declarations: [
       ListConsentsComponent,
       GiveConsentComponent
   ],
   imports:[
    CommonModule,
    ConsentsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule
   ]
})

export class ConsentsModule { }
