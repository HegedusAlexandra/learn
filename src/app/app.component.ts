import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceCardComponent } from './common/price-card/price-card.component';
import { PlanService } from './service/plan.service';

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
  planService = inject(PlanService)
  title = 'architect';
  headers: string[] = ['Pricing example', 'Pricing', 'Compare Plans'];
  pricing = this.planService.pricing;
  isQuestionShow: boolean = false;
  userQuestion: string = '';
  classes: { [k: string]: string } = {
    bg: 'bg-primary',
    txt: 'text-white',
  };
  onChoosePlan(plan:Plan): void {
    console.log(plan)
    this.isQuestionShow = true;
  }
  onOrder(plan: Plan): void {
    alert(`Thank you for choosing the ${plan.name} plan!`);
  }
}
