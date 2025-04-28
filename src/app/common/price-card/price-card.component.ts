import { Component } from '@angular/core';
import { Plan } from '../../model/plan';

@Component({
  selector: 'app-price-card',
  imports: [],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
})
export class PriceCardComponent {
  plan: Plan = {
    name: 'Free',
    price: 0,
    users: 10,
    storage: 2,
    email: 'Email support',
  };

  onChoosePlan(): void {
   /*  this.isQuestionShow = true; */
  }
}
