import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './Navi-bar/nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PropertyCardComponent,PropertyListComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

  
  
})
export class AppComponent {
  title = 'SmartScope';
}
