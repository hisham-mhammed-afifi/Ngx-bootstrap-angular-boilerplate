import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pricing-plans.component.html',
  styles: [],
})
export class PricingPlansComponent {}
