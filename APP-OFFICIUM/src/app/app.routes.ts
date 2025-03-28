import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path:"test", component:TestComponent },
  { path:"register", component:RegisterComponent },
  { path:"", component:RegisterComponent },
];
