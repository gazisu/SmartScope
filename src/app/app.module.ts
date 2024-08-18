import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./Property/property-card/property-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { PropertyListComponent } from "./property-list/property-list.component";



@NgModule({
  declarations: [

    AppComponent,
    PropertyCardComponent,
    PropertyListComponent
  ],
  imports:[
    BrowserModule
  ],
  providers:[],
    bootstrap:[AppComponent]
  
})

export class AppModule{

}