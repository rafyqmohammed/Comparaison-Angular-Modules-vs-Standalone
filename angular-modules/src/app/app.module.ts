import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent // Déclaration du composant enfant
  ],
  imports: [
    BrowserModule,
    FormsModule // nécessaire pour [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent] // AppComponent est le point d’entrée
})
export class AppModule {}
