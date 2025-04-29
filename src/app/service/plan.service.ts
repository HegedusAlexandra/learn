import { Injectable } from '@angular/core';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  constructor() {}
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
}
