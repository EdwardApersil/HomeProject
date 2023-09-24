import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Home',
    }
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: {
      title: 'Forms',
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Forms',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
