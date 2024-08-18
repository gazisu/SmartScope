import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyListComponent } from "./property-list/property-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, PropertyListComponent],
  standalone: true
  
  
})
export class AppComponent {
  title = 'SmartScope';
}
