import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { PropertyCardComponent } from "./property/property-card/property-card.component";



@NgModule({
    declarations: [
        AppComponent,
        PropertyCardComponent
    ],
    imports:[BrowserModule],
    providers:[],
    bootstrap:[AppComponent]

})

export class AppModule{


}