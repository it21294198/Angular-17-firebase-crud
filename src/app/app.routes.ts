import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {path: '',   redirectTo: '/user-list', pathMatch: 'full' },
    {path:'user-list',component:UserListComponent},
    {path:'user-create',component:UserCreateComponent},
    {path:'**',component:PageNotFoundComponent}
];
