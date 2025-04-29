import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Plan } from '../../model/plan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-card',
  imports: [CommonModule],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
})

/* ctrl+. automatikusan generálja a metódust az interfészhez */

export class PriceCardComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked{
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('method called')
  }
  ngOnInit(): void {
    console.log('method called')
  }
  ngDoCheck(): void {
    console.log('method called')
  }
  ngAfterContentChecked(): void {
    console.log('method called')
  }
  ngAfterContentInit(): void {
    console.log('method called')
  }
  ngAfterViewChecked(): void {
    console.log('method called')
  }

  @Input() plan: Plan = {
    name: 'Free',
    price: 0,
    users: 10,
    storage: 2,
    email: 'Email support',
  };

  @Input() cardClass = {
    'text-black': true,
  };

  @Input() btnClass: string[] = ['btn-outline-primary'];

  @Output() onChoose: EventEmitter<Plan> = new EventEmitter();

  onChoosePlan(): void {
    this.onChoose.emit(this.plan)
  }
}
