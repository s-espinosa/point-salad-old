import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VeggieComponent } from './veggie/veggie.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { Veggie } from './veggie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VeggieComponent, VeggiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'point-salad';
  veggies: Veggie[] = [
    {
      name: 'lettuce'
    },
    {
      name: 'onion'
    },
    {
      name: 'cabbage'
    },
    {
      name: 'yellow pepper'
    },
    {
      name: 'carrot'
    },
  ]
  collectedVeggies: Veggie[] = [];
  veggieTypes = [
      'lettuce',
      'onion',
      'cabbage',
      'yellow pepper',
      'carrot',
  ]

  selectVeggie(veggie: Veggie) {
    let index = this.veggies.indexOf(veggie)
    this.veggies.splice(index, 1)
    this.collectedVeggies.push(veggie)
  }

  countCollected(veggieName: string) {
    let count = 0;
    this.collectedVeggies.forEach((veggie) => {
      if(veggie.name === veggieName) {
        count++
      }
    })
    return count
  }
}
