import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Veggie } from '../veggie';
import { VeggieComponent } from '../veggie/veggie.component';

@Component({
  selector: 'ps-veggies',
  standalone: true,
  imports: [NgFor, VeggieComponent],
  templateUrl: './veggies.component.html',
  styleUrl: './veggies.component.scss'
})
export class VeggiesComponent {
  veggies: Veggie[] = [
    {
      color: 'green-600',
      name: 'lettuce'
    },
    {
      color: 'pink-700',
      name: 'onion'
    },
    {
      color: 'fuchsia-800',
      name: 'cabbage'
    },
    {
      color: 'yellow-400',
      name: 'yellow pepper'
    },
    {
      color: 'orange-500',
      name: 'carrot'
    },
    {
      color: 'red-700',
      name: 'tomato'
    },
  ]
}
