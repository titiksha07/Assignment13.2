import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CricketersListComponent } from "app/cricketers/cricketers-list.component";
import { CricketerComponent } from "app/cricketer/cricketer.component";
import { CricketerDetailComponent } from "app/cricketer-detail/cricketer-detail.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AuthGuardComponent } from "./../routes/auth-guard";
import { LoginComponent } from "./../login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/cricketer', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  { path: 'cricketer', 
    component: CricketerComponent,
    canActivate:[AuthGuardComponent]},
  { path: 'cricketersList', component: CricketersListComponent },
  { path: 'cricketerDetail/:id', component: CricketerDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);