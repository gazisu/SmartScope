import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  Property: any = {
    "id":1,
    "Name": "Gazi House",
    "type":"House",
    "Price": 1200

  }

}
