import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((c) => c.authRoutes),
  },
  {
    path: 'pricing-plans',
    loadComponent: () =>
      import('./pages/pricing-plans/pricing-plans.component').then(
        (c) => c.PricingPlansComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
