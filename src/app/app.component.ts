import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceCardComponent } from './common/price-card/price-card.component';

interface Plan {
  name: string;
  price: number;
  users: number;
  storage: number;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PriceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'architect';
  headers: string[] = ['Pricing example', 'Pricing', 'Compare Plans'];
  pricing: Plan[] = [
    {
      name: 'Free',
      price: 0,
      users: 10,
      storage: 2,
      email: 'Email support',
    },
    {
      name: 'Pro',
      price: 15,
      users: 20,
      storage: 10,
      email: 'Priority email support',
    },
    {
      name: 'Enterprise',
      price: 29,
      users: 30,
      storage: 15,
      email: 'Phone and email support',
    },
  ];
  isQuestionShow: boolean = false;
  userQuestion: string = '';
  classes: { [k: string]: string } = {
    bg: 'bg-primary',
    txt: 'text-white',
  };
  onChoosePlan(): void {
    this.isQuestionShow = true;
  }
  onOrder(plan: Plan): void {
    alert(`Thank you for choosing the ${plan.name} plan!`);
  }
}
