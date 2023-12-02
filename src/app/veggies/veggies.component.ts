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
}
